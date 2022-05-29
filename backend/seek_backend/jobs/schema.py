import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import jobs
from django.db.models import Q
from .models import jobkeywords,jobclassifications,joblocations


class JobsObject(DjangoObjectType):
    class Meta:
        model = jobs
        fields = '__all__'



class JobsQueries(graphene.ObjectType):

    jobs = graphene.List(JobsObject, jobkeyword=graphene.String(required=False),
                                     classification=graphene.List(graphene.String,required=False),
                                    jobregion=graphene.String(required=False))

    def resolve_jobs(self,info,jobkeyword='',classification=[],jobregion=''):

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
                                            title__contains=jobkeyword,jobclassification__in=classfications_filter)

        return jobs_filtered                                                                  