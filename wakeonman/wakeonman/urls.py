from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^hosts', include('frontend.urls')),
    re_path(r'^categories', include('frontend.urls')),
    path('', include('frontend.urls')),
    path('', include('wakeapp.urls')),
]
