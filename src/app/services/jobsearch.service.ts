import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class JobSearchService{
    constructor(private apollo:Apollo){

    }

    jobsearchterms(keyword:string){
        return this.apollo.query({
          query:gql`query JobSearchKeywords($keyword:String!){
            jobKeywords(searchTerm:$keyword){
                id
                name
                
              }
          }`,
          variables:{
              keyword:keyword
          } 
        }).pipe(map((res:any)=>res.data.jobKeywords
        ))
    }

    allJobSearchTerms(){
        return this.apollo.query({
            query:gql`query{
                allJobKeywords{
                  id
                  name
                }
              }`
        }).pipe(map((res:any)=>res.data.allJobKeywords))
    }

    jobKeyWordRegions(searchterm:string){
        return this.apollo.query({
            query:gql`query jobMainRegion($searchterm:String!){
                jobKeylocations(searchTerm:$searchterm){
                      id
                      name
               
                  }
            }`,variables:{
                searchterm:searchterm
            }
        }).pipe(map((res:any)=>res.data.jobKeylocations))
    }

    allJobKeywordRegions(){
        return this.apollo.query({
            query:gql`query{
                allJobKeylocations{
                  id
                  name
                }
              }`
        }).pipe(map((res:any)=>res.data.allJobKeylocations))
    }

    allJobClassifications(){
        return this.apollo.query({
            query:gql`query{
                allJobClassifications {
                  id
                  name
                }
              }`
        }).pipe(map((res:any)=>res.data.allJobClassifications))
    }
    jobsfilter(jobkeyword:string='',jobregion:string='',classification:Array<string>=[],sortDate:boolean=false){
      return this.apollo.query({
        query:gql`query jobsfiltering($jobkeyword:String!,$jobregion:String!,$classification:[String!],$sortDate:Boolean!){
          jobs(jobkeyword:$jobkeyword,jobregion:$jobregion,classification:$classification,sortDate:$sortDate){
            count
            jobs{
                id
                title
    }
  }
}`,
        variables:{
          jobkeyword:jobkeyword,
          jobregion:jobregion,
          classification:classification,
          sortDate:sortDate
        }
      }).pipe(map((res:any)=>res.data.jobs))
    }

}  