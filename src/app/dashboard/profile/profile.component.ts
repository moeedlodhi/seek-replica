import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { DataService, mainService } from 'src/app/services/subject.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupformComponent} from './popupform/popupform.component'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  firstName:string;
  lastName:string;
  email:string;
  city:string;




 








  constructor(private mainservice:mainService,public dialog:MatDialog){

  }
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')
    this.email = localStorage.getItem('email')
    this.city = localStorage.getItem('city')

    this.mainservice.sendMessage('showProfileMain')
    

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupformComponent, {
      width: '600px',
      height:'70%',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
     
  




 

 


