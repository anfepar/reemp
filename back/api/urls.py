from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'sectors', views.SectorViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'preferences', views.PreferenceViewSet)
router.register(r'locations', views.LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('alliance/', views.alliance_view),
    path('alliance/<int:pk>', views.alliance_detail),
    path('products/<int:company_pk>', views.product_preference_order_view),
    #path('get_best_company_matches/<int:pk>', views.get_best_company_matches)
]