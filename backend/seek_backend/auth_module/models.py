from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class candidate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='candidate')
    first_registration = models.BooleanField(default = True)

