# Generated by Django 3.0.2 on 2022-06-08 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='created_at',
            field=models.DateTimeField(null=True),
        ),
    ]