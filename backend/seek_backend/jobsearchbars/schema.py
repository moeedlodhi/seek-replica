import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from .models import jobkeywords,jobclassifications,joblocations

class JobKeyWordsType(DjangoObjectType):
    class Meta:
        model = jobkeywords
        fields = '__all__'

class JobClassificationType(DjangoObjectType):
    class Meta:
        model = jobclassifications
        fields = '__all__'

class JobKeyRegions(DjangoObjectType):
    class Meta:
        model = joblocations
        fields = '__all__'

class JobSearchBarQueries(graphene.ObjectType):
    job_keywords = graphene.List(JobKeyWordsType,search_term=graphene.String(required=True))
    all_job_keywords = graphene.List(JobKeyWordsType)
    job_keylocations = graphene.List(JobKeyRegions,search_term=graphene.String(required=True))
    all_job_keylocations = graphene.List(JobKeyRegions)
    all_job_classifications = graphene.List(JobClassificationType)


    def resolve_job_keywords(self,info,search_term):
        iterable = jobkeywords.objects.filter(name__startswith=search_term)
        return iterable

    def resolve_all_job_keywords(self,info):
        iterable = jobkeywords.objects.all()
        return iterable

    def resolve_job_keylocations(self,info,search_term):
        iterable = joblocations.objects.filter(name__startswith=search_term)
        return iterable

    def resolve_all_job_keylocations(self,info):
        iterable = joblocations.objects.all()
        return iterable

    def resolve_all_job_classifications(self, info):
        iterable = jobclassifications.objects.all()
        return iterable    



