import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css']
})
export class GettingstartedComponent implements OnInit {

  profileForm:any
  @ViewChild('country') country:ElementRef
  @ViewChild('city') city:ElementRef
  @ViewChild('classification') class:ElementRef
  @ViewChild('startMonth') startMonth:ElementRef
  @ViewChild('startYear') startYear:ElementRef
  showCity:boolean
  currentlyEmployeed:boolean = false

  constructor() { }

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
      'livesincity':new FormControl(null),
      'preferredclassification':new FormControl(null,Validators.required),
      'checkbox':new FormControl(false)
      



    })
  }

  defineCountry(item){
    this.country.nativeElement.value = item
    const countryControl = this.profileForm.get('livesin')
    const cityControl = this.profileForm.get('livesincity')
    if(this.country.nativeElement.value.length>0){
      this.showCity = true

      countryControl.setErrors(null)
 
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


    }
  }
  defineClass(item){
    const classControl = this.profileForm.get('preferredclassification')

    this.class.nativeElement.value = item
    if(this.class.nativeElement.value.length>0){
      classControl.setErrors(null)
    }
  }
  currentlyWorking(){

    this.currentlyEmployeed = !this.currentlyEmployeed
    const endYear = this.profileForm.get('endyear')
    const endMonth = this.profileForm.get('endmonth')

    if(this.currentlyEmployeed === true){


      endYear.clearValidators()
      endMonth.clearValidators()
    }
    else{
      endYear.setValidators(Validators.required)
      endMonth.setValidators(Validators.required)

    }



  }

  setDate(type,value){

    if(type === 'startMonth'){
      this.startMonth.nativeElement.value = value
      if(this.startMonth.nativeElement.value.length>0){
        const startMonth = this.profileForm.get('startedmonth')
        startMonth.setErrors(null)
      }
    }

    else if(type === 'startYear'){
      this.startYear.nativeElement.value = value

      if(this.startYear.nativeElement.value.length>0){
        const startYear = this.profileForm.get('startedyear')
        startYear.setErrors(null)
      }


    }

  }




  onSubmit(){
  
    Object.keys(this.profileForm.controls).forEach(field => {

      const control = this.profileForm.get(field)
      control.markAsTouched({onlySelf:true})


      
    });
    console.log(this.profileForm)
  }


}
