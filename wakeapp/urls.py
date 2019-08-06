from rest_framework import routers
from .api import HostViewSet, HostCategoryViewSet

router = routers.DefaultRouter()
router.register('api/wakeapp/hosts', HostViewSet, 'wakeapp')
router.register('api/wakeapp/hostcategories', HostCategoryViewSet, 'wakeapp')

urlpatterns = router.urls
