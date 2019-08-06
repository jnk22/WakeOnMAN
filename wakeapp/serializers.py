from rest_framework import serializers
from wakeapp.models import Host, HostCategory


# Host serializer
class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = '__all__'

# HostCategory serializer
class HostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = HostCategory
        fields = '__all__'
