# Generated by Django 3.0.6 on 2020-05-31 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='country',
            field=models.CharField(default='Colombia', max_length=100),
        ),
    ]