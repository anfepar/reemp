from django.db import models

class Sector(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

    def __str__(self):
        return "{id: "+ str(self.id) + " || name: "+ str(self.name) + " || description: "+ str(self.description) +"}"

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    nit = models.CharField(max_length=50)
    owner = models.CharField(max_length=100)
    suscription = models.BooleanField(default=False)
    sector = models.ForeignKey(Sector, on_delete=models.PROTECT)

    def __str__(self):
        return "{id: "+ str(self.id)+" || name: " + str(self.name) + " || suscription: " + str(self.suscription) + " || sector: "+ str(self.sector)+"}"

class Location(models.Model):
    id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=100, default="Colombia")
    city = models.CharField(max_length=100)
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

    def __str__(self):
        return "{" + f"id: {self.id} || sector: {self.sector} || category: {self.category} || company: {self.company}" + "}"

class Alliance(models.Model):
    id = models.AutoField(primary_key=True)
    duration = models.IntegerField()
    startingDate = models.DateField(auto_now=True)
    description = models.TextField(max_length=500)
    allianceType = models.CharField(
        max_length=2,
        choices=[("AP", "Alianza de Producto"), ("AI", "Alianza de Insumo")],
        default="AP")
    status = models.CharField(
        max_length=1,
        choices=[("A", "Aceptada"), ("R", "Rechazada"), ("N", "En negociación")],
        default="N"
    )
    disccount = models.FloatField()
    limitQuantity = models.IntegerField()
    alliedPercentage =  models.FloatField()
    ownerPercentage = models.FloatField()
    owner = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="Dueño de alianza")
    allied = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="Aliado")
    # faltan productos

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=500)
    author = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="Autor")
    alliance = models.ForeignKey(Alliance, on_delete=models.PROTECT)
