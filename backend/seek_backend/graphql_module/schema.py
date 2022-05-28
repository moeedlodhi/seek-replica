from auth_module.schema import AuthMutations,UserQueries
from jobsearchbars.schema import JobSearchBarQueries
import graphene
class Mutations(
    AuthMutations

):pass

class Query(
    UserQueries,
    JobSearchBarQueries

):pass

schema = graphene.Schema(query=Query, mutation=Mutations, types=[])

