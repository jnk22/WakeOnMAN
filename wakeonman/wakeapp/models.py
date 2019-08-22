from django.db import models
from django.utils import timezone
from macaddress.fields import MACAddressField
from colorful.fields import RGBColorField

import wakeonlan
import getmac
from multiping import MultiPing


class HostCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, max_length=500)
    color = RGBColorField(default='#FFFFFF')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Host(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
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

    def start(self):
        if self.mac_address is None:
            raise ValueError("No MAC address available.")

        try:
            wakeonlan.send_magic_packet(str(self.mac_address))
            return True
        except ValueError as msg:
            raise ValueError(msg)

    def find_mac(self):
        mac_address_ipv4 = getmac.get_mac_address(self.ipv4_address)
        mac_address_ipv6 = getmac.get_mac_address(self.ipv6_address)

        if mac_address_ipv4 == mac_address_ipv6:
            return mac_address_ipv4
        if mac_address_ipv4 and not mac_address_ipv6:
            return mac_address_ipv4
        elif mac_address_ipv6 and not mac_address_ipv4:
            return mac_address_ipv6
        else:
            raise AttributeError("Both IPs do not match the same MAC address")

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

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['category', 'name']
