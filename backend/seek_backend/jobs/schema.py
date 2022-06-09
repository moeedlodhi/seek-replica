import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import jobs
from django.db.models import Q
from .models import jobkeywords,jobclassifications,joblocations
from graphene.types import generic

class JobsObject(DjangoObjectType):
    class Meta:
        model = jobs
        fields = '__all__'

    


class JobsOutput(graphene.ObjectType):
    jobs = graphene.List(JobsObject)
    count = graphene.String()   



class JobsQueries(graphene.ObjectType):

    jobs = graphene.Field(JobsOutput, jobkeyword=graphene.String(required=False),
                                     classification=graphene.List(graphene.String,required=False),
                                    jobregion=graphene.String(required=False),sort_date=graphene.Boolean(required=False))

    def resolve_jobs(self,info,jobkeyword='',classification=[],jobregion='',sort_date=False):

        if classification != []:
            classfications_filter = list(jobclassifications.objects.filter(name__in=classification))
        else:
            classfications_filter = list(jobclassifications.objects.all())

        if jobregion !='':
            jobregion_filter = list(joblocations.objects.filter(name=jobregion))
        else:
            jobregion_filter = list(joblocations.objects.all())    
        if jobkeyword=='':
            jobs_filtered = jobs.objects.filter(joblocation__in=jobregion_filter
                                            ,jobclassification__in=classfications_filter)
        else:
            jobs_filtered = jobs.objects.filter(joblocation__in=jobregion_filter,
                                            title__contains=jobkeyword,jobclassification__in=classfications_filter).order_by('title')
        if sort_date == True:

            jobs_filtered = jobs_filtered.order_by('-created_at')

        print(jobs_filtered,jobs_filtered.count())                                  
        list1 = {"count":jobs_filtered.count(),"jobs":jobs_filtered}
        return list1                                                                