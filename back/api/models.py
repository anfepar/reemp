from django.db import models

class Sector(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    suscription = models.BooleanField(default=False)
    sector = models.ForeignKey(Sector, on_delete=models.PROTECT)

class Location(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    company = models.ForeignKey(Company, on_delete=models.PROTECT)

class Preference(models.Model):
    id = models.AutoField(primary_key=True)
    sector = models.ForeignKey(Sector, on_delete=models.PROTECT, blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True)
    company = models.ForeignKey(Company, on_delete=models.PROTECT)
