import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { DataService, mainService } from 'src/app/services/subject.service';
import { AuthServiceModule } from 'src/app/services/authmodule.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';



// function endValidator(formControl: AbstractControl) {

//   if (!formControl.parent) {
//     return null;
//   }
  
//   if (formControl.parent.get('checkbox').value === false) {
//     return Validators.required(formControl); 
//   }else{
//     return null
//   }
//   return null;
// }




@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css'],
  animations: [
      trigger('fadeInOut', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(500, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(200, style({opacity:0})) 
        ])
      ])
    ]
})
export class GettingstartedComponent implements OnInit {

  profileForm:any
  @ViewChild('country') country:ElementRef
  @ViewChild('city') city:ElementRef
  @ViewChild('classification') class:ElementRef
  @ViewChild('startMonth') startMonth:ElementRef
  @ViewChild('endMonth') endMonth:ElementRef
  @ViewChild('startYear') startYear:ElementRef
  @ViewChild('endYear') endYear:ElementRef
  showCity:boolean
  currentlyEmployeed:boolean = false

  constructor(private mainservice:mainService,
              private authService:AuthServiceModule,
              private router:Router) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'jobtitle':new FormControl(null,Validators.required),
      'companyname':new FormControl(null,Validators.required),
      'startedmonth':new FormControl(null,Validators.required),
      'startedyear':new FormControl(null,Validators.required),
      'endmonth':new FormControl(null,Validators.required),
      'endyear':new FormControl(null,Validators.required),
      'livesin':new FormControl(null,Validators.required),
      'livesincity':new FormControl(null,Validators.required),
      'preferredclassification':new FormControl(null,Validators.required),
      'checkbox':new FormControl(false)
      



    })
    this.mainservice.sendMessage('showProfile')
  }
 

  defineCountry(item){
    this.country.nativeElement.value = item
    const countryControl = this.profileForm.get('livesin')
    const cityControl = this.profileForm.get('livesincity')
    if(this.country.nativeElement.value.length>0){
      this.showCity = true

      countryControl.setErrors(null)
      countryControl.value = this.country.nativeElement.value
      cityControl.setValidators(Validators.required)

    }else{
      this.showCity = false
      cityControl.clearValidators()
    }
  }
  defineCity(item){
    const cityControl = this.profileForm.get('livesincity')
    this.city.nativeElement.value = item
    if(this.city.nativeElement.value.length>0){
      cityControl.setErrors(null)
      cityControl.value = this.city.nativeElement.value


    }
  }
  defineClass(item){
    const classControl = this.profileForm.get('preferredclassification')

    this.class.nativeElement.value = item
    if(this.class.nativeElement.value.length>0){
      classControl.value = item
      classControl.setErrors(null)
    }
  }
  currentlyWorking(){


    this.currentlyEmployeed = !this.currentlyEmployeed
    const endYear = this.profileForm.get('endyear')
    const endMonth = this.profileForm.get('endmonth')

    if(this.currentlyEmployeed === true){


  
      endYear.value = ''
      endMonth.value = ''
      endYear.clearValidators()
      endYear.updateValueAndValidity()
      endMonth.clearValidators()
      endMonth.updateValueAndValidity()
     
    }
    else{
      this.endMonth.nativeElement.value = null
      this.endYear.nativeElement.value = null

      endYear.setValidators([Validators.required])
      endYear.updateValueAndValidity()
      endMonth.setValidators([Validators.required])
      endMonth.updateValueAndValidity()
     
     
  

    }



  }

  setDate(type,value){

    if(type === 'startMonth'){
      this.startMonth.nativeElement.value = value
      if(this.startMonth.nativeElement.value.length>0){
        const startMonth = this.profileForm.get('startedmonth')
        startMonth.setErrors(null)
        startMonth.value = value
      }
    }

    else if(type === 'startYear'){
      this.startYear.nativeElement.value = value

      if(this.startYear.nativeElement.value.length>0){
        const startYear = this.profileForm.get('startedyear')
        startYear.setErrors(null)
        startYear.value = value
      }


    }
    else if(type ==='endMonth'){
      this.endMonth.nativeElement.value = value
      if(this.endMonth.nativeElement.value.length>0){
        const endMonth= this.profileForm.get('endmonth')
        endMonth.setErrors(null)
        endMonth.value = value
      }

    }else if(type === 'endYear'){
      this.endYear.nativeElement.value = value
      if(this.endYear.nativeElement.value.length>0){
        const endYear= this.profileForm.get('endyear')
        endYear.setErrors(null)
        endYear.value = value
      }

    }

  }




  onSubmit(){
   
    Object.keys(this.profileForm.controls).forEach(field => {

      const control = this.profileForm.get(field)
      control.markAsTouched({onlySelf:true})
  
    });


    console.log(this.profileForm)

    if(this.profileForm.status ==='INVALID'){

      return
    }else{
  
      const firstName = this.profileForm.get('firstname').value
      const lastname = this.profileForm.get('lastname').value
      const jobtitle = this.profileForm.get('jobtitle').value
      const companyname= this.profileForm.get('companyname').value
      const startedmonth = this.profileForm.get('startedmonth').value
      const startedyear = this.profileForm.get('startedyear').value
      const endmonth = this.profileForm.get('endmonth').value
      const endyear = this.profileForm.get('endyear').value
      const currentworking = this.profileForm.get('checkbox').value
      const country = this.profileForm.get('livesin').value
      const city = this.profileForm.get('livesincity').value
      const classi = this.profileForm.get('preferredclassification').value
      this.authService.gettingStarted(firstName,lastname,jobtitle,companyname,startedmonth,startedyear,
                                        currentworking,endmonth,endyear,country,city,classi).subscribe(
                                          res=>{

                                            this.router.navigate(['dashboard','jobsearch','jobs']
                                            )
                                            
                                          }
                                        )
    }
  
  }


}
