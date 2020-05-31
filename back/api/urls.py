from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'sectors', views.SectorViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('get_best_company_matches/<int:pk>', views.get_best_company_matches)
]