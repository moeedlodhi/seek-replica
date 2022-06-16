import { AfterContentChecked, AfterViewChecked, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceModule } from '../services/authmodule.service';
import { DataService, mainService } from '../services/subject.service';
import {ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy, OnChanges, AfterContentChecked{
  selectedTab:String = 'job'
  hideBars:Boolean=true;
  showSignInBar:Boolean;
  username:any;
  toggled:Boolean=false

  constructor(
    private router:Router,
    private authservice:AuthServiceModule,
    private dataservice:DataService,
    private mainservice:mainService,
    private route:ActivatedRoute,
    private cdref: ChangeDetectorRef 
  ) {
    
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,'change')
  }

  ngOnInit(): void {

    this.recieveMessage()
    
    this.route.params.subscribe(
      res=>{
  
        console.log(this.route.snapshot.params,'res')
      } 
    )
   
   
    
    

    const token=localStorage.getItem('Token')
    if(token){
      

      this.authservice.verifyToken(token).subscribe(
        res=>{
            
            
            
        },
        err=>{
            localStorage.removeItem('Token')
            localStorage.removeItem('username')
            this.showSignInBar=true
            
            
        }
    )

    }else{
      localStorage.removeItem('Token')
      localStorage.removeItem('username')
           

    }

    if(localStorage.getItem('username')===null){
      this.showSignInBar=true;
    }else{
      this.showSignInBar=false;
      this.username=localStorage.getItem('username')
    }
    
  

    


  }

 
  recieveMessage(){
    return this.mainservice.getMessage().subscribe(
      res=>{
        if (res==='showJob'){

          console.log('yoooo',res)
          this.selectedTab = 'job'

        }
        else if(res==='showProfile'){
          this.selectedTab = 'profile'
        }
        
      }
    )
  
  }
  ngOnDestroy(): void {
    this.recieveMessage().unsubscribe()
  }
 
  changeMainColor(item){
    this.selectedTab=item

}
toggleImage(){

  let doc =document.getElementById('mainarrow')
 

  let doc2 = document.getElementById('sideWindow1')
  if(this.toggled === false){
    doc.classList.toggle('spinimage1')
    this.toggled = true
    doc2.classList.remove('hide')
    doc2.classList.add('visible')

  }else{
    doc.classList.toggle('spinimage1')
    this.toggled= false
    doc2.classList.remove('visible')
    doc2.classList.add('hide')

  }


}
redirectTab(item){
  if (item === 'profile'){
    let doc = document.getElementById('profileTab')
    doc.click()
  }
}

}
