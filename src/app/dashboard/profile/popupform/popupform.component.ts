import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthServiceModule } from 'src/app/services/authmodule.service';
@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {
  personalForm:any
  ngOnInit(): void {

    this.personalForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname':new FormControl(null),
      'livesin':new FormControl(null),
      'code':new FormControl(null),
      'phone':new FormControl(null)



    })
    
  }

  constructor(
    private authservice:AuthServiceModule,
    public dialogRef: MatDialogRef<PopupformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: 'none',
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){

    const firstname = this.personalForm.get('firstname').value
    const lastname = this.personalForm.get('lastname').value
    const livesin = this.personalForm.get('livesin').value
    const code = this.personalForm.get('code').value
    const phone = this.personalForm.get('phone').value

    this.authservice.updatePersonalDetails(firstname,lastname,livesin,code,phone).subscribe(
      res=>{
        console.log(res,'res hahahah')
      }
    )
    


  }
}
