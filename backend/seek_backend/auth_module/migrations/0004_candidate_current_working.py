# Generated by Django 3.0.2 on 2022-06-10 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_module', '0003_auto_20220610_1107'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='current_working',
            field=models.BooleanField(default=False),
        ),
    ]
