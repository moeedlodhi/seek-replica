import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthServiceModule } from 'src/app/services/authmodule.service';
import { catchError} from 'rxjs/operators';
import { MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { from,of } from 'rxjs';
import { concatMap,switchMap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {

  signinForm:FormGroup
  validity:boolean
  showLoader:boolean=false;
  showAlert:boolean = false

  constructor(private authservice:AuthServiceModule,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.signinForm=new FormGroup({
      'username':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,Validators.required)
    })
  }
  
  onSubmit(){
    console.log(this.signinForm)
    this.validity=!this.validity;
    const username=this.signinForm.get('username').value
    const password=this.signinForm.get('password').value
    // this.openDialog()
    this.showLoader=true
    this.authservice.loginUser(username,password).subscribe(
      (res:any)=>{
        this.showLoader=false
        console.log('res',res)
        localStorage.setItem('username',res.data.tokenAuth.payload.username)
        localStorage.setItem('Token',res.data.tokenAuth.token)
        this.router.navigateByUrl('/dashboard/jobsearch/jobs')
      },
      (err:HttpErrorResponse)=>{
        this.showAlert = true
        this.showLoader=false
        console.log(err,'error here')
      }
    )
    
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogueComponentComponent, dialogConfig);
}


}
