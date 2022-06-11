from auth_module.schema import AuthMutations,UserQueries
from jobsearchbars.schema import JobSearchBarQueries
from jobs.schema import JobsQueries
import graphene
class Mutation(
    AuthMutations

):pass

class Query(
    UserQueries,
    JobSearchBarQueries,
    JobsQueries

):pass

schema = graphene.Schema(query=Query, mutation=Mutation, types=[])

