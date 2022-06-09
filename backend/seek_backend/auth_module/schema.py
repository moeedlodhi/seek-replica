import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from.models import candidate
import time

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



class AuthMutations(graphene.ObjectType):
    register_user = RegisterUser.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()