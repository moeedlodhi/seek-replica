import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService, mainService } from 'src/app/services/subject.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string
  city:string
  email:string
  showEditButton:boolean = true;
  personalDetailForm:any;
  showPersonalForm:boolean = false;

  constructor(private dataservice:DataService,private mainservice:mainService) { }

  ngOnInit(): void {
    this.personalDetailForm = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'livesin': new FormControl(null,Validators.required),
      'countryPhoneCode':new FormControl(null,Validators.required),
      'phoneNumber':new FormControl(null,Validators.required)
    })


    this.username = localStorage.getItem('username')
    this.city = localStorage.getItem('city')
    this.email = localStorage.getItem('email')

    if(!this.email){
      this.showEditButton = false

    }
    this.mainservice.sendMessage('showProfileMain')


   
  }

  showForm(){

    this.showPersonalForm = true

  }
  onSubmit(){
     
  }
 

}
