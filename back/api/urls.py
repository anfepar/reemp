from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'sectors', views.SectorViewSet)
router.register(r'categories', views.CategoryViewSet)
# router.register(r'get_best_company_matches', views.get_best_company_matches)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('get_best_company_matches/<int:pk>', views.get_best_company_matches)
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]