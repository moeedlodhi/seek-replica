import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { AuthServiceModule } from './services/authmodule.service';


@Injectable({
    providedIn: 'root'
  })
export class AuthenticationGuard implements CanActivate{
    constructor(private authservice:AuthServiceModule,private router:Router){}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
     
        const token=localStorage.getItem('Token')
        return this.authservice.verifyToken(token).pipe(
            map((res:any)=>{

                return true            
            }
    
        ),catchError((error) => {

            localStorage.removeItem('Token')
            localStorage.removeItem('username')
            this.router.navigateByUrl('/dashboard')
            return of(true);
        }))
        

    }
   
} 

@Injectable({
    providedIn: 'root'
})
export class StartedGuard implements CanActivate{
    constructor(private authservice:AuthServiceModule,private router:Router){}

   
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
     
        

        return this.authservice.verifyStatus('').pipe(
            
            map((res:any)=>{
                if(res.data.verifyUserStatus.ok==='True'){
                    this.router.navigateByUrl('dashboard/profile/gettingstarted')
                    return true
                }else{
                    const resUser = res.data.verifyUserStatus.candidateField.user
                    const resCandidate = res.data.verifyUserStatus.candidateField

                  
                    const username = resUser.username
                    const email = resUser.email
                    const country = resCandidate.country
                    const city = resCandidate.city
                    const firstName = resCandidate.firstName
                    const lastName = resCandidate.lastName

                    localStorage.setItem('username',username)
                    localStorage.setItem('email',email)
                    localStorage.setItem('country',country)
                    localStorage.setItem('city',city)
                    localStorage.setItem('firstName',firstName)
                    localStorage.setItem('lastName',lastName)



                    return true
                }
               
            }
    
        ),catchError((error) => {
            
            return of(true);
        }))
        

    }
} 



@Injectable({
    providedIn: 'root'
})
export class GettingStartedGuard implements CanActivate{
    constructor(private authservice:AuthServiceModule,private router:Router){}

   
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
     
        

        return this.authservice.verifyStatus('').pipe(
            map((res:any)=>{
                if(res.data.verifyUserStatus.ok==='True'){
                    
                    return true
                }else{
                    this.router.navigateByUrl('dashboard/jobsearch/jobs')
        
                    return true;
                }
               
            }
    
        ),catchError((error) => {

            this.router.navigateByUrl('dashboard/jobsearch/jobs')
        
            return of(true);
        }))
        

    }
} 