from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

from .serializers import CompanySerializer, SectorSerializer, CategorySerializer, PreferenceSerializer, LocationSerializer, AllianceSerializer
from .models import Company, Sector, Category, Preference, Location, Alliance


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
        snippets = Alliance.objects.all()
        serializer = AllianceSerializer(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AllianceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.validated_data)
            alliance =serializer.validated_data
            message = "¡Hey! No te pierdas la oportunidad de encontrar tu aliado ideal. "+\
                        str(serializer.validated_data['owner'].name) + " quiere establecer "+\
                        "una nueva alianza contigo. Ingresa ya mismo a www.reemp.com y acepta "+\
                        "esta increible oportunidad."
            send_mail("Nueva solicitud de alianza",
                message,
                "no-reply@reemp.com",
                ["lmardila71@hotmail.com"],
                fail_silently=False)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


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

"""@api_view(["GET"])
def get_best_company_matches(request, pk):
    try:
        preference = Preference.objects.filter(company__id=pk)
    except Preference.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    pass"""
