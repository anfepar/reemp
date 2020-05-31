from django.db import models


class Sector(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

    def __str__(self):
        return "{id: " + str(self.id) + " || name: " + str(self.name) + " || description: " + str(
            self.description) + "}"


class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    nit = models.CharField(max_length=50)
    owner = models.CharField(max_length=100)
    suscription = models.BooleanField(default=False)
    sector = models.ForeignKey(Sector, on_delete=models.PROTECT)
    picture = models.ImageField(upload_to='pictures/', blank=True, null=True)

    def __str__(self):
        return "{id: " + str(self.id) + " || name: " + str(self.name) + " || suscription: " + str(
            self.suscription) + " || sector: " + str(self.sector) + "}"


class Location(models.Model):
    id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=100, default="Colombia")
    city = models.CharField(max_length=100)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

    def __str__(self):
        return "{" + f"id: {self.id} || name: {self.name} || description: {self.description}" + "}"


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    company = models.ForeignKey(Company, on_delete=models.PROTECT)


class Preference(models.Model):
    id = models.AutoField(primary_key=True)
    sector = models.ForeignKey(Sector, on_delete=models.PROTECT, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)
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
    disccount = models.FloatField(null=True)
    limitQuantity = models.IntegerField(null=True)
    alliedPercentage = models.FloatField(null=True)
    ownerPercentage = models.FloatField(null=True)
    owner = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="propietarioAlianza")
    allied = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="aliado")
    products = models.ManyToManyField(Product)


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=500)
    author = models.ForeignKey(Company, on_delete=models.PROTECT)
    alliance = models.ForeignKey(Alliance, on_delete=models.PROTECT)
