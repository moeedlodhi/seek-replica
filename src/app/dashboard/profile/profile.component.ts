import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService, mainService } from 'src/app/services/subject.service';

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

  constructor(private dataservice:DataService,private mainservice:mainService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.city = localStorage.getItem('city')
    this.email = localStorage.getItem('email')

    if(!this.email){
      this.showEditButton = false

    }
    this.mainservice.sendMessage('showProfileMain')


   
  }
 

}
