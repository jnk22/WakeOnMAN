from django.shortcuts import render
from django.http import HttpResponse

from wakeapp import hosts

computers_sample = list()
categories_sample = list()

category_pyhsical = hosts.Category("Physical Computers")
category_vm = hosts.Category("Virtual Machines")
categories_sample.extend([category_pyhsical, category_vm])

computers_sample.append(hosts.Host("PC 1", category_pyhsical))
computers_sample.append(hosts.Host("PC 2", category_pyhsical))
computers_sample.append(hosts.Host("PC 3", category_pyhsical))
computers_sample.append(hosts.Host("PC 4", category_pyhsical))

computers_sample.append(hosts.Host("VM 1", category_vm))
computers_sample.append(hosts.Host("VM 2", category_vm))


def home(request):
    context = {'computers': computers_sample, 'categories': categories_sample,
               'title': "Dashboard"}
    return render(request, 'wakeapp/home.html', context)


def settings(request):
    context = {'computers': computers_sample, 'categories': categories_sample,
               'title': "Settings"}
    return render(request, 'wakeapp/settings.html', context)


def testwake(request):
    for host in computers_sample:
        try:
            host.start()
        except AttributeError:
            pass
    return render(request, 'wakeapp/testwake.html')
