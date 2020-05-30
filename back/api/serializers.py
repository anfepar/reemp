from rest_framework import serializers

from .models import Company

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'nit', 'owner', 'suscription', 'sector']
