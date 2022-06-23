import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {
  personalForm:any
  ngOnInit(): void {

    this.personalForm = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'livesin':new FormControl(null,Validators.required),
      'code':new FormControl(null,Validators.required),
      'phone':new FormControl(null,Validators.required)



    })
    
  }

  constructor(
    public dialogRef: MatDialogRef<PopupformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: 'none',
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    console.log(this.personalForm.get('phone'))


  }
}
