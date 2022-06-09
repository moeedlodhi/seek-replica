from django.db import models
from jobsearchbars.models import jobkeywords,jobclassifications,joblocations


class jobs(models.Model):
    title = models.CharField(max_length=264)
    desciption = models.TextField(max_length=10000)
    joblocation = models.ForeignKey(joblocations,on_delete=models.CASCADE,related_name='location')
    jobclassification = models.ForeignKey(jobclassifications,on_delete=models.CASCADE,related_name='classification')
    created_at = models.DateTimeField(null=True)
    
    


# Create your models here.
