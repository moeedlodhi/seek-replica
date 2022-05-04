import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTab:String;
  hideBars:Boolean=true;

  constructor(
    private route:Router
  ) {
    
  }

  ngOnInit(): void {
    
    let doc=document.getElementById('jobsearchbutton')
    doc.click()

    


  }
 
  changeMainColor(item){
    this.selectedTab=item

}  

}
