from django.db import models
from django.db.models.signals import pre_save, post_init
from django.utils import timezone
from macaddress.fields import MACAddressField
from colorful.fields import RGBColorField

import wakeonlan
import getmac
from multiping import MultiPing


class HostCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, max_length=500)
    color = RGBColorField(default='#FFFFFF')

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Host(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, max_length=500)
    ipv4_address = models.GenericIPAddressField(null=True, blank=True,
                                                protocol='IPv4')
    ipv6_address = models.GenericIPAddressField(null=True, blank=True,
                                                protocol='IPv6')
    mac_address = MACAddressField(null=True, blank=True)
    wol_port = models.PositiveIntegerField(default=9)
    state = models.BooleanField(default=False, editable=False)
    last_online = models.DateTimeField(null=True, blank=True, editable=False)
    date_added = models.DateTimeField(default=timezone.now, editable=False)
    date_edited = models.DateTimeField(default=timezone.now, editable=False)
    remote_vnc_url = models.URLField(null=True, blank=True)
    remote_teamviewer_id = models.PositiveIntegerField(null=True, blank=True)
    remote_splahstop_url = models.URLField(null=True, blank=True)
    category = models.ForeignKey(HostCategory, on_delete=models.SET_NULL,
                                 null=True, blank=True)

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return self.name

    def start(self):
        if self.mac_address is None:
            raise ValueError("No MAC address available.")

        try:
            wakeonlan.send_magic_packet(str(self.mac_address))
            return True
        except ValueError as msg:
            raise ValueError(msg)

    def find_mac(self):
        mac_ipv4 = getmac.get_mac_address(
            ip=str(self.ipv4_address)) if self.ipv4_address else None
        mac_ipv6 = getmac.get_mac_address(
            ip6=str(self.ipv6_address)) if self.ipv6_address else None

        if mac_ipv4 == mac_ipv6:
            return mac_ipv4

        if mac_ipv4 and not mac_ipv6:
            return mac_ipv4
        elif mac_ipv6 and not mac_ipv4:
            return mac_ipv6
        else:
            raise ValueError("Both IPs do not match the same MAC address")

    def ping(self):
        # Create list of both IPv4 and IPv6 addresses if available
        ip_addresses = [ip for ip in [self.ipv4_address, self.ipv6_address]
                        if ip is not None]

        if not ip_addresses:
            raise ValueError("No IPs available")

        ping = MultiPing(ip_addresses)
        ping.send()
        responses, no_responses = ping.receive(1)

        if responses:
            self.state = True
            self.last_online = timezone.now()
            return True
        else:
            self.state = False
            return False


def host_update_states(sender, instance, **kwargs):
    try:
        instance.state = instance.ping()
    except ValueError:
        instance.state = False


def host_update_mac(sender, instance, **kwargs):
    if not instance.mac_address:
        try:
            instance.mac_address = instance.find_mac()
        except ValueError:
            instance.mac_address = None


pre_save.connect(host_update_mac, sender=Host)
post_init.connect(host_update_states, sender=Host)
