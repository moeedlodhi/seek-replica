# Generated by Django 3.0.2 on 2022-06-25 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_module', '0006_candidate_resume'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
