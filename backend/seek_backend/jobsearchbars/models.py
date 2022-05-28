from django.db import models

# Create your models here.



class jobkeywords(models.Model):
    name = models.CharField(max_length=264,blank=True)

    def __str__(self):
        return self.name


class jobclassifications(models.Model):
    name = models.CharField(max_length=264,blank=True)

    def __str__(self):
        return self.name


class joblocations(models.Model):
    name = models.CharField(max_length=264,blank=True)

    def __str__(self):
        return self.name