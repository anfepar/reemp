from rest_framework import serializers

from .models import Company, Sector, Category, Preference, Location, Alliance, Product


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'nit', 'owner', 'suscription', 'sector', 'picture')


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
        fields = ['id', 'country', 'city', 'company']

class AllianceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alliance
        fields = ['id', 'duration', 'startingDate', 'description', 'allianceType', 'status', 'disccount',
                    'limitQuantity', 'alliedPercentage', 'ownerPercentage', 'owner', 'allied', 'products']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'category', 'company']
