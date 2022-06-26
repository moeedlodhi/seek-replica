from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from seek_backend.settings import STATIC_ROOT
# Create your models here.


class candidate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='candidate')
    first_name = models.CharField(max_length=264,null=True,blank=True)
    last_name = models.CharField(max_length=264,null=True,blank=True)
    job_title = models.CharField(max_length=264,null=True,blank=True)
    company_name = models.CharField(max_length=264,null=True,blank=True)
    start_date = models.DateTimeField(null=True,blank=True)
    end_date = models.DateTimeField(null=True,blank=True)
    country = models.CharField(max_length=264,null=True,blank=True)
    city = models.CharField(max_length=264,null=True,blank=True)
    classification = models.CharField(max_length=264,null=True,blank=True)
    first_registration = models.BooleanField(default = True)
    current_working = models.BooleanField(default = False) 
    country_code = models.CharField(max_length=264,null=True,blank=True)
    phone_number = models.CharField(max_length=264,null=True,blank=True)
    resume = models.FileField(upload_to='seek_backend/static/candidateFiles', null=True, blank=True)

    def __str__(self):
        return self.user.username


