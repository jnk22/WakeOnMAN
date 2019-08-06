from django.shortcuts import render
from django.http import HttpResponse

from .models import Host, HostCategory


def home(request):
    context = {'hosts': Host.objects.all(), 'title': "Dashboard"}
    print(context)
    for key, val in context.items():
        if key == 'hosts':
            for elem in val:
                try:
                    print(elem.category)
                except AttributeError:
                    pass
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
