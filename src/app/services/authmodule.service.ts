import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ClassificationInfo } from "typescript";


@Injectable({
    providedIn: 'root'
  })
export class AuthServiceModule{

    constructor(private apollo:Apollo){}

    loginUser(email1:any,password1:any){
        return this.apollo.mutate({
            mutation:gql`mutation loginMutation($email:String!,$password:String!){
                tokenAuth(username:$email,password:$password){
                    token
                    payload
                  }
            }`,variables:{
                email:email1,
                password:password1
            }
        })
    }

    verifyToken(token:any){
        return this.apollo.mutate({
            mutation:gql`mutation verifyToken($token:String!){
                verifyToken(token:$token){
                    payload
                  }
            }`,variables:{
                token:token
            }
        })
    }

    registerUser(username:string,password:string,email:string){
        return this.apollo.mutate({
            mutation:gql`mutation RegisterUser($username:String!,$email:String!,$password:String!){

                registerUser(username:$username,password:$password,email:$email){
                    ok
                    error
                    user{
                      username
                      email
                      candidate{
                        id
                        firstRegistration
                      }
                    }
                  }

            }`,
            variables:{
                username:username,
                password:password,
                email:email
            }
        })
    }

    gettingStarted(firstName:string,lastName:string,jobTitle:string,companyName:string,
                   startedMonth:string,startedYear:string,currentWorking:boolean,endMonth:string,endYear:string,
                   country:string,city:string,classification:string){
            return this.apollo.mutate({
                mutation:gql`mutation gettingStarted($firstName:String!,$lastName:String!,$jobTitle:String!,$companyName:String!,
                    $startedMonth:String!,$startedYear:String!,$currentWorking:Boolean!,$endMonth:String!,$endYear:String!,
                    $country:String!,$city:String!,$classification:String!){
                        userGettingStarted(firstName:$firstName,lastName:$lastName,
                            jobTitle:$jobTitle,companyName:$companyName,startedMonth:$startedMonth,startedYear:$startedYear,
                            currentWorking:$currentWorking,endMonth:$endMonth,endYear:$endYear,country:$country,
                            city:$city,classification:$classification){
                            ok
                            error
                          }
                    }`,variables:{

                        firstName:firstName,
                        lastName:lastName,
                        jobTitle:jobTitle,
                        companyName:companyName,
                        startedMonth:startedMonth,
                        startedYear:startedYear,
                        currentWorking:currentWorking,
                        endMonth:endMonth,
                        endYear:endYear,
                        country:country,
                        city:city,
                        classification:classification

                    }
            })
        }

        verifyStatus(randomArg:string=''){
            return this.apollo.mutate({
                mutation:gql `mutation{
                    verifyUserStatus(randomArgument:""){
                      ok
                      error
                    }
                  }`
            })
        }
}  