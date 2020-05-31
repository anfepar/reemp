from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse

from .serializers import CompanySerializer, SectorSerializer, CategorySerializer, PreferenceSerializer, LocationSerializer
from .models import Company, Sector, Category, Preference, Location


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class SectorViewSet(viewsets.ModelViewSet):
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PreferenceViewSet(viewsets.ModelViewSet):
    queryset = Preference.objects.all()
    serializer_class = PreferenceSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

"""@api_view(["GET"])
def get_best_company_matches(request, pk):
    try:
        preference = Preference.objects.filter(company__id=pk)
    except Preference.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    pass"""
