from django.contrib import admin
from .models import jobkeywords,jobclassifications,joblocations

admin.site.register(jobkeywords)
admin.site.register(jobclassifications)
admin.site.register(joblocations)

# Register your models here.
