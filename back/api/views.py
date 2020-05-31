from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CompanySerializer, SectorSerializer, CategorySerializer
from .models import Company, Sector, Category, Preference


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class SectorViewSet(viewsets.ModelViewSet):
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@api_view(["GET"])
def get_best_company_matches(request, pk):
    try:
        preference = Preference.objects.filter(company__id=pk)
    except Preference.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return get_best_company_matches(preference)