from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Host, HostCategory
from .serializers import HostSerializer, HostCategorySerializer


# Host ViewSet
class HostViewSet(viewsets.ModelViewSet):
    queryset = Host.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = HostSerializer

    @action(detail=True, methods=['patch'])
    def start(self, request, pk=None):
        host = self.get_object()
        try:
            host.start()
            return Response({'status': 'Wake up command successfully sent.'})
        except ValueError as msg:
            return Response({'status': str(msg)})

    @action(detail=True, methods=['patch'])
    def ping(self, request, pk=None):
        host = self.get_object()
        try:
            state = host.check_state()
            host.save()
            if state:
                return Response(
                    {'status': 'Ping successfully sent. Client is online'})
            else:
                return Response(
                    {'status': 'Ping successfully sent. Client is offline'})
        except ValueError as msg:
            return Response({'status': str(msg)})


# HostCategory ViewSet
class HostCategoryViewSet(viewsets.ModelViewSet):
    queryset = HostCategory.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = HostCategorySerializer
