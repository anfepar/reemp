from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

from .serializers import CompanySerializer, SectorSerializer, CategorySerializer, \
                        PreferenceSerializer, LocationSerializer, AllianceSerializer, \
                        ProductSerializer
from .models import Company, Sector, Category, Preference, Location, Alliance, Product
from api.ai.aiModule import get_best_company_matches_from_preference, get_best_product_matches_by_preference

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


@csrf_exempt
def alliance_view(request):
    """
    Create a new alliance.
    """
    if request.method == 'GET':
        alliance = Alliance.objects.all()
        serializer = AllianceSerializer(alliance, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AllianceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.validated_data)
            alliance = serializer.validated_data
            message = "¡Hey! No te pierdas la oportunidad de encontrar tu aliado ideal. " + \
                      str(serializer.validated_data['owner'].name) + " quiere establecer " + \
                      "una nueva alianza contigo. Ingresa ya mismo a www.reemp.com y acepta " + \
                      "esta increible oportunidad."
            send_mail("Nueva solicitud de alianza",
                message,
                "no-reply@reemp.com",
                ["camilagomezr05@gmail.com"],
                fail_silently=False)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def product_preference_order_view(request, company_pk):
    try:
        company = Company.objects.get(pk=company_pk)
    except Company.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        result = []
        category_preferences = Preference.objects.filter(company=company, sector=None).values('category')
        products_prefences = Product.objects.filter(company=company).filter(category__in=category_preferences)
        products_no_prefences = Product.objects.filter(company=company).exclude(category__in=category_preferences)
        for product in products_prefences:
            result.append(product)
        for product in products_no_prefences:
            result.append(product)
        #pro = Product.objects.filter(company=company)
        serializer = ProductSerializer(result, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def alliance_detail(request, pk):
    """
    Retrieve, update or delete a code alliance.
    """
    try:
        alliance = Alliance.objects.get(pk=pk)
    except Alliance.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = AllianceSerializer(alliance)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AllianceSerializer(alliance, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        alliance.delete()
        return HttpResponse(status=204)


@api_view(["GET"])
def get_best_company_matches(request, pk):
    try:
        preferences = Preference.objects.filter(company__id=pk)
    except Preference.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return get_best_company_matches_from_preference(preferences)


@api_view(["GET"])
def get_best_product_matches(request, pk):
    try:
        preferences = Preference.objects.filter(company__id=pk)
    except Preference.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return get_best_product_matches_by_preference(preferences)
