from django.shortcuts import render
from django.http import HttpResponse

from .models import Host, HostCategory


def home(request):
    context = {'hosts': Host.objects.all(), 'title': "Dashboard"}
    return render(request, 'wakeapp/home.html', context)


def settings(request):
    context = {'hosts': Host.objects.all(), 'title': "Settings"}
    return render(request, 'wakeapp/settings.html', context)


def testwake(request):
    for host in Host.objects.all():
        try:
            host.start()
        except AttributeError:
            pass
    return render(request, 'wakeapp/testwake.html')
