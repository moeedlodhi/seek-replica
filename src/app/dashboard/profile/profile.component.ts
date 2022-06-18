import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string
  city:string
  email:string

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.city = localStorage.getItem('city')
    this.email = localStorage.getItem('email')


   
  }
 

}
