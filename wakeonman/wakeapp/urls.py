from rest_framework import routers
from .api import HostViewSet, HostCategoryViewSet

router = routers.DefaultRouter()
router.register('api/hosts', HostViewSet)
router.register('api/hostcategories', HostCategoryViewSet)

urlpatterns = router.urls
