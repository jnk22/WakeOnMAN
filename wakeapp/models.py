from django.db import models
from django.utils import timezone
from macaddress.fields import MACAddressField
from colorful.fields import RGBColorField


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

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['category', 'name']
