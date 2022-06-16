import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceModule } from '../services/authmodule.service';
import { switchMap, mergeMap,concatMap,map, filter } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registermodule',
  templateUrl: './registermodule.component.html',
  styleUrls: ['./registermodule.component.css']

})
export class RegistermoduleComponent implements OnInit {

  signupForm:FormGroup
  validity:Boolean
  showAlert:Boolean = false;
  loader:Boolean = false

  constructor(private authservice:AuthServiceModule,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    const username = this.signupForm.get('username').value
    const email = this.signupForm.get('email').value
    const password = this.signupForm.get('password').value
    var username1 = ''
    var password1 = ''
    this.loader = true
    this.authservice.registerUser(username,password,email).pipe(map((res:any)=>{
      const res1 = res.data.registerUser
      if(res1.ok ==='False'){
        this.loader = false;
        this.showAlert = true;
      }
      return res1
    }),filter(

      (res:any) => res.ok ==='True'
  
      
    ),switchMap((res:any)=>this.authservice.loginUser(res.user.username,password))
    ).subscribe(
      async (res:any)=>{

        const token = res.data.tokenAuth.token
        const username = res.data.tokenAuth.payload.username
        localStorage.setItem('Token',token)
        localStorage.setItem('username',username)
        localStorage.setItem('gettingStarted','false')
        await setTimeout(()=>{

          
          this.router.navigate(['dashboard','profile','gettingstarted'])

        },2000)
      }
    )
  
    this.validity=!this.validity;
  }  

}
