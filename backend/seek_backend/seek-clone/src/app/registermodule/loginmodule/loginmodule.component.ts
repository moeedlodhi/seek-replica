import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthServiceModule } from 'src/app/services/authmodule.service';
import { catchError} from 'rxjs/operators';
import { MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';
@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {

  signinForm:FormGroup
  validity:Boolean

  constructor(private authservice:AuthServiceModule,private dialog:MatDialog) { }

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
    this.openDialog()
    this.authservice.loginUser(username,password).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
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
