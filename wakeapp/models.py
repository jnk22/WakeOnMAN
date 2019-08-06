from django.db import models
from django.utils import timezone
from macaddress.fields import MACAddressField
from colorful.fields import RGBColorField


# Create your models here.

class HostCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    color = RGBColorField(default='#FFFFFF')


class Host(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ipv4_address = models.GenericIPAddressField(null=True, blank=True,
                                                protocol='IPv4')
    ipv6_address = models.GenericIPAddressField(null=True, blank=True,
                                                protocol='IPv6')
    mac_address = MACAddressField(null=True, blank=True)
    wol_port = models.PositiveIntegerField(default=9)
    state = models.BooleanField(default=False)
    last_online = models.DateTimeField(null=True, blank=True)
    date_added = models.DateTimeField(default=timezone.now)
    date_edited = models.DateTimeField(default=timezone.now)
    remote_vnc_url = models.URLField(null=True, blank=True)
    remote_teamviewer_id = models.PositiveIntegerField(null=True, blank=True)
    remote_splahstop_url = models.URLField(null=True, blank=True)
    category = models.ForeignKey(HostCategory, on_delete=models.SET_NULL,
                                 null=True, blank=True)
