from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^dashboard', include('frontend.urls')),
    re_path(r'^hosts', include('frontend.urls')),
    re_path(r'^categories', include('frontend.urls')),
    re_path(r'^settings', include('frontend.urls')),
    re_path(r'^users', include('frontend.urls')),
    re_path(r'^about', include('frontend.urls')),
    re_path(r'^addhost', include('frontend.urls')),
    re_path(r'^addcategory', include('frontend.urls')),
    path('', include('frontend.urls')),
    path('', include('wakeapp.urls')),
]
