from rest_framework import serializers

from .models import Company, Sector, Category, Preference, Location


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'nit', 'owner', 'suscription', 'sector')


class SectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sector
        fields = ('id', 'name', 'description')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = ('id', 'sector', 'category', 'company')


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'country', 'city', 'company')
