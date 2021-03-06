import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ClassificationInfo } from "typescript";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class AuthServiceModule{

    constructor(private apollo:Apollo, private httpservice:HttpClient){}



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

    uploadResume(data): Observable<any> {
      const url = `https://api.portfolio-moeed.com/uploadresume/`;
      return this.httpservice.post<any>(url,
  
        data);
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
                   country:string,city:string,classification:string,resume:any){
            return this.apollo.mutate({
                mutation:gql`mutation gettingStarted($firstName:String!,$lastName:String!,$jobTitle:String!,$companyName:String!,
                    $startedMonth:String!,$startedYear:String!,$currentWorking:Boolean!,$endMonth:String!,$endYear:String!,
                    $country:String!,$city:String!,$classification:String!,$resume:Upload!){
                        userGettingStarted(resume:$resume,firstName:$firstName,lastName:$lastName,
                            jobTitle:$jobTitle,companyName:$companyName,startedMonth:$startedMonth,startedYear:$startedYear,
                            currentWorking:$currentWorking,endMonth:$endMonth,endYear:$endYear,country:$country,
                            city:$city,classification:$classification){
                            ok
                            error
                          }
                    }`,variables:{

                        firstName:firstName,
                        resume:resume,
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
                      candidateField{
                        country
                        city
                        firstName
                        lastName
                        user{
                          email
                          username
                        }
                      }
                    }
                  }`
            })
        }


        updatePersonalDetails(firstname:string,lastname:string,livesin:string,code:string,phonenumber:string){
            return this.apollo.mutate({

                mutation:gql`mutation{
                    updateProfile(phoneNumber:"${phonenumber}",countryCode:"${code}",firstName:"${firstname}",lastName:"${lastname}",livesIn:"${livesin}"){
                      ok
                      error
                      candidate{
                        country
                        countryCode
                        firstName
                        lastName
                        phoneNumber
                        city
                        companyName
                        currentWorking
                      }
                    }
                  }`

            })
        }
}  