import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";


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
}  