from pickle import NONE
import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from.models import candidate
import time
from graphql_jwt.decorators import login_required
from .mapping import month_mapper
from graphene_file_upload.scalars import Upload

class UserObjectType(DjangoObjectType):
    class Meta:
        model=User
        fields='__all__'

class CandidateObjectType(DjangoObjectType):
    class Meta:
        model = candidate
        fields = '__all__'


class UserQueries(graphene.ObjectType):
    single_user=graphene.Field(UserObjectType)

    def resolve_single_user(root,info):
        single_user=info.content.User
        return single_user


class RegisterUser(graphene.Mutation):
    class Arguments():
        username = graphene.String()
        password = graphene.String()
        email = graphene.String()

    ok = graphene.String()
    error = graphene.String()
    user = graphene.Field(UserObjectType)
    candidate = graphene.Field(CandidateObjectType)

    def mutate(self, info, **kwargs):
        try:
            user_to_create = User.objects.create(username = kwargs['username'],email = kwargs['email'])
            candidate_to_create = candidate.objects.create(user = user_to_create)    
        except BaseException as e:
            return RegisterUser(ok='False', error=str(e))

        user_to_create.set_password(kwargs['password'])
        user_to_create.save()

        return RegisterUser(ok='True', error='None',user = user_to_create)




class UserGettingStarted(graphene.Mutation):
    class Arguments:
        first_name = graphene.String()
        last_name = graphene.String()
        job_title = graphene.String()
        company_name = graphene.String()
        started_month = graphene.String()
        started_year = graphene.String()
        current_working = graphene.Boolean()
        end_month = graphene.String()
        end_year = graphene.String()
        country = graphene.String()
        city = graphene.String()
        classification = graphene.String()
        resume = Upload(required = False)
    
    ok = graphene.String()
    error = graphene.String()

    @login_required
    def mutate(self,info,**kwargs):
        print(info.context.user,'*********',kwargs['resume'])
        candidate_to_create,created = candidate.objects.get_or_create(user=info.context.user)

        started_month_mapped = month_mapper[kwargs['started_month']]
        string_date = f"{kwargs['started_year']}-{started_month_mapped}-01"
        print(string_date)
        if kwargs['current_working'] == True:  

            candidate_to_create.first_name = kwargs['first_name']
            candidate_to_create.last_name = kwargs['last_name']
            candidate_to_create.job_title = kwargs['job_title']
            candidate_to_create.company_name = kwargs['company_name']
            candidate_to_create.start_date = string_date
            candidate_to_create.current_working = True
            candidate_to_create.country = kwargs['country']
            candidate_to_create.city = kwargs['city']
            candidate_to_create.classification = kwargs['classification']
            candidate_to_create.first_registration = False
            candidate_to_create.save()
        else:
            end_month_mapped = month_mapper[kwargs['end_month']]
            string_end_date = f"{kwargs['end_year']}-{end_month_mapped}-01"
            candidate_to_create.first_name = kwargs['first_name']
            candidate_to_create.last_name = kwargs['last_name']
            candidate_to_create.job_title = kwargs['job_title']
            candidate_to_create.company_name = kwargs['company_name']
            candidate_to_create.start_date = string_date
            candidate_to_create.current_working = False
            candidate_to_create.country = kwargs['country']
            candidate_to_create.city = kwargs['city']
            candidate_to_create.classification = kwargs['classification']
            candidate_to_create.first_registration = False
            candidate_to_create.end_date = string_end_date
            candidate_to_create.save()
        return True        


class UpdateProfile(graphene.Mutation):
    class Arguments():
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        lives_in = graphene.String(required = False)
        country_code = graphene.String(required = False)
        phone_number = graphene.String(required=False)

    ok = graphene.String()
    error = graphene.String()
    candidate = graphene.Field(CandidateObjectType)

    @login_required
    def mutate(self, info, first_name=None, last_name=None, lives_in=None, country_code=None, phone_number=None):
        candidate_to_get = candidate.objects.filter(user=info.context.user).first()
        if first_name == 'null':
            pass 
        else:
            candidate_to_get.first_name = first_name
        if last_name == 'null':
            pass
        else:
            print('*********',last_name)
            candidate_to_get.last_name = last_name

        if lives_in == 'null':
            pass
        else:
            print('*****')
            candidate_to_get.city  = lives_in

        if country_code == 'null':
            pass
        else:
            candidate_to_get.country_code = country_code   

        if phone_number == 'null':
            pass
        else:
            candidate_to_get.phone_number = phone_number
        candidate_to_get.save()
        return UpdateProfile(ok='True', error='None',candidate = candidate_to_get)       

class VerifyUserStatus(graphene.Mutation):

    class Arguments():
        random_argument = graphene.String()

    ok = graphene.String()
    error = graphene.String()
    candidate_field = graphene.Field(CandidateObjectType) 

    @login_required
    def mutate(self, info,**kwargs):
        user = info.context.user
        candidate_to_get = candidate.objects.filter(user = user).first()
        if candidate_to_get.first_registration == False:
            return VerifyUserStatus(ok='False', error='None', candidate_field = candidate_to_get)
        else:
            return VerifyUserStatus(ok='True', error='None', candidate_field = candidate_to_get)    
        





class AuthMutations(graphene.ObjectType):
    verify_user_status = VerifyUserStatus.Field()
    register_user = RegisterUser.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    user_getting_started = UserGettingStarted.Field()
    update_profile = UpdateProfile.Field()