# Generated by Django 3.0.2 on 2022-05-27 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobsearchbars', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='jobclassifications',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=264)),
            ],
        ),
        migrations.CreateModel(
            name='joblocations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=264)),
            ],
        ),
    ]
