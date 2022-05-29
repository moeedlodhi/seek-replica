from auth_module.schema import AuthMutations,UserQueries
from jobsearchbars.schema import JobSearchBarQueries
from jobs.schema import JobsQueries
import graphene
class Mutations(
    AuthMutations

):pass

class Query(
    UserQueries,
    JobSearchBarQueries,
    JobsQueries

):pass

schema = graphene.Schema(query=Query, mutation=Mutations, types=[])

