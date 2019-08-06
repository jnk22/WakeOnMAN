from rest_framework import viewsets, permissions
from wakeapp.models import Host, HostCategory
from .serializers import HostSerializer, HostCategorySerializer


# Host ViewSet
class HostViewSet(viewsets.ModelViewSet):
    queryset = Host.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = HostSerializer


# HostCategory ViewSet
class HostCategoryViewSet(viewsets.ModelViewSet):
    queryset = HostCategory.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = HostCategorySerializer
