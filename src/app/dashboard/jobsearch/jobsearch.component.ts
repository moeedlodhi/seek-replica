import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { mainService } from 'src/app/services/subject.service';


export class parameters{
  keywordJob:string;
  keywordType:string;
  keywordRegion:string
}

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})



export class JobsearchComponent implements OnInit {
  hideBars:String;
  rotation:Boolean;
  showOptions:Boolean=false;
  showWorkType:Boolean=false;
  showPayType:Boolean=false;
  showPayTypeSecond:Boolean=false;
  showListedTime:Boolean=false
  clickedDiv:String;
  keywordLength:Boolean=false;
  keywordTypeLength:Boolean=false
  keywordRegionLength:Boolean=false
  showJobList1:Boolean=false;
  showJobList2:Boolean=false;
  showJobList3:Boolean=false;
  classificationArray:Array<string>=[]
  params:any;

  @ViewChild('keywordJob') keywordJob:ElementRef
  @ViewChild('keywordType') keywordType:ElementRef
  @ViewChild('keywordRegion') keywordRegion:ElementRef




  constructor(private router:Router,private mainService:mainService) {

  
   }
 

  ngOnInit(): void {
  

  }

  rotateimage(item){

    let doc =document.getElementById(item)


    if(item==='image1'){
      this.rotation=!this.rotation
      let doc =document.getElementById('image1')
      doc.classList.toggle('spinimage1')
        
      if(this.showPayType===true){
        let doc2 =document.getElementById('image2')
        doc2.classList.toggle('spinimage1')

      }
      else if(this.showPayTypeSecond===true){
        let doc3 =document.getElementById('image3')
        doc3.classList.toggle('spinimage1')

      }
      else if(this.showListedTime===true){
        let doc4 =document.getElementById('image4')
        doc4.classList.toggle('spinimage1')

      }
      // else{
      //   doc.classList.remove('spinimage1')
      // }
      // let doc1 =document.getElementById('image2')
      // let doc2 =document.getElementById('image3')
      // let doc3 =document.getElementById('image4')
      // doc1.classList.remove('spinimage1')
      // doc2.classList.remove('spinimage1')
      // doc3.classList.remove('spinimage1')


      this.showWorkType=!this.showWorkType
      this.showPayType=false
      this.showPayTypeSecond=false;
      this.showListedTime=false;
      this.rotation=false;
    }else if(item==='image2'){
    
      this.rotation=!this.rotation
      let doc =document.getElementById('image2')
      doc.classList.toggle('spinimage1')

      if(this.showWorkType===true){
        let doc2 =document.getElementById('image1')
        doc2.classList.toggle('spinimage1')

      }
      
      if(this.showPayTypeSecond===true){
        let doc3 =document.getElementById('image3')
        doc3.classList.toggle('spinimage1')

      }
      if(this.showListedTime===true){
        let doc4 =document.getElementById('image4')
        doc4.classList.toggle('spinimage1')

      }
      // else{
      //   doc.classList.remove('spinimage1')
      // }
      // let doc1 =document.getElementById('image1')
      // let doc2 =document.getElementById('image3')
      // let doc3 =document.getElementById('image4')
      // doc1.classList.remove('spinimage1')
      // doc2.classList.remove('spinimage1')
      // doc3.classList.remove('spinimage1')

      this.showPayType=!this.showPayType
      this.showWorkType=false
      this.showPayTypeSecond=false;
      this.showListedTime=false;
      this.rotation=false;
      

    }else if(item==='image3'){


     
      this.rotation=!this.rotation
      let doc =document.getElementById('image3')
      doc.classList.toggle('spinimage1')
    
      if(this.showPayType===true){
        let doc2 =document.getElementById('image2')
        doc2.classList.toggle('spinimage1')

      }
      else if(this.showWorkType===true){
        let doc3 =document.getElementById('image1')
        doc3.classList.toggle('spinimage1')

      }
      else if(this.showListedTime===true){
        let doc4 =document.getElementById('image4')
        doc4.classList.toggle('spinimage1')

      }
      // else{
      //   doc.classList.remove('spinimage1')
      // }
      // let doc1 =document.getElementById('image1')
      // let doc2 =document.getElementById('image2')
      // let doc3 =document.getElementById('image4')
      // doc1.classList.remove('spinimage1')
      // doc2.classList.remove('spinimage1')
      // doc3.classList.remove('spinimage1')





      this.showPayType=false
      this.showWorkType=false
      this.showListedTime=false;
      this.showPayTypeSecond=!this.showPayTypeSecond
      this.rotation=false;

    }else if(item==='image4'){


 
      this.rotation=!this.rotation
      let doc =document.getElementById('image4')
      doc.classList.toggle('spinimage1')


      if(this.showPayType===true){
        let doc2 =document.getElementById('image2')
        doc2.classList.toggle('spinimage1')

      }
      else if(this.showWorkType===true){
        let doc3 =document.getElementById('image1')
        doc3.classList.toggle('spinimage1')

      }
      else if(this.showPayTypeSecond===true){
        let doc4 =document.getElementById('image3')
        doc4.classList.toggle('spinimage1')

      }





      // else{
      //   doc.classList.remove('spinimage1')
      // }
      // let doc1 =document.getElementById('image1')
      // let doc2 =document.getElementById('image2')
      // let doc3 =document.getElementById('image3')
      // doc1.classList.remove('spinimage1')
      // doc2.classList.remove('spinimage1')
      // doc3.classList.remove('spinimage1')


      this.showPayType=false
      this.showWorkType=false
      this.showListedTime=!this.showListedTime;
      this.showPayTypeSecond=false
      this.rotation=false;


    }

    // this.rotation=!this.rotation
    // if(this.rotation===true){

    //   doc.classList.add('spinimage1')


    // }else{
    //   doc.classList.remove('spinimage1')
  
    // }


  }
  expandOptions(){
    this.showOptions=true;

  }

  clickingDiv(item){  
  
    this.clickedDiv=item

  }
  enterJobsearch(event){
    this.router.navigateByUrl(`dashboard/jobsearch/joblist`);
    
    this.params=new parameters()
    
    this.params.keywordType=this.classificationArray
    this.params.keywordJob=this.keywordJob.nativeElement.value
    this.params.keywordRegion=this.keywordRegion.nativeElement.value

    this.mainService.sendMessage(this.params)




  }
  jobSearch(event){


    if (event.target.name==='keywordJob'){
      if(this.keywordJob.nativeElement.value.length>0){
        this.keywordLength=true
        
      }
      else{
        this.keywordLength=false
      }
    }  

    // }else if(event.target.name==='keywordType'){
    //   if(this.keywordType.nativeElement.value.length>0){
    //     this.keywordTypeLength=true
    //   }
    //   else{
    //     this.keywordTypeLength=false
    //   }

    if(event.target.name==='keywordRegion'){
      if(this.keywordRegion.nativeElement.value.length>0){
        this.keywordRegionLength=true
      }
      else{
        this.keywordRegionLength=false
      }

    }
  }
  pushToArray(item){

    if (this.classificationArray.includes(item)){
      const index=this.classificationArray.indexOf(item)
      this.classificationArray.splice(index,1)
    }else{
      this.classificationArray.push(item)
    }
    console.log(this.classificationArray,'array')

    if(this.classificationArray.length>0){

      this.keywordType.nativeElement.value=`${this.classificationArray.length} types selected`

    }else{
      this.keywordType.nativeElement.value=''
    }

  }

  removeText(name){
    if(name==='keywordJob'){
      this.keywordJob.nativeElement.value=''
      this.keywordLength=false
    }
    else if(name==='keywordType'){
      this.keywordType.nativeElement.value=''
      this.keywordTypeLength=false
    }
    else if(name==='keywordRegion'){
      this.keywordRegion.nativeElement.value=''
      this.keywordRegionLength=false
    }

  }
  keyJob(item){


    if(item==='sayHello1'){
      this.showJobList1=true;

    }
    else if(item==='sayHello2'){
      this.showJobList2=true
    }
    else if(item==='sayHello3'){
      this.showJobList3=true
    }
  }

  
  

}
