import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSearchService } from 'src/app/services/jobsearch.service';
import { mainService } from 'src/app/services/subject.service';
import { mergeMap } from 'rxjs/operators';
import { jobObj } from '../joblist.models';
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit,OnDestroy {

  jobs:Array<jobObj>;
  count:string;
  loader:boolean = false;
  toggledSideWindow:boolean = false
  dateSort:boolean = false;
  keywordJob:string
  keywordRegion:string
  keywordType:Array<string> = []
  @ViewChild('imageSpin') imageSpin:ElementRef



  constructor(private route:ActivatedRoute,private jobservice:JobSearchService) { 
   
  }

  ngOnInit(): void {

    
        

    this.route.queryParams.subscribe(
      async(res:any)=>{
        this.loader = true
        this.keywordJob = res.keywordJob
        this.keywordRegion = res.keywordRegion
        this.keywordType = res.keywordType
        
        const res1 = await this.jobservice.jobsfilter(res.keywordJob,res.keywordRegion,res.keywordType,this.dateSort).toPromise()
        this.jobs = res1.jobs
        this.count = res1.count
        setTimeout(()=>{
          this.loader = false

        },1000)
        
      }
    )
    
  }
  async sortByDate(){
    this.dateSort = true
    this.loader = true
    this.loader = true
    const res1 = await this.jobservice.jobsfilter(this.keywordJob,this.keywordRegion,this.keywordType,this.dateSort).toPromise()
    this.jobs = res1.jobs
    this.count = res1.count

    
    



    await setTimeout(()=>{
          this.loader = false
          

    },1000)


   


  }
  ngOnDestroy(): void {
    
  }

  toggleImage(){

    let doc = document.getElementById('mainRelevance')
    let doc2 = document.getElementById('sideWindow')
    if(this.toggledSideWindow === false){
      doc.classList.toggle('spinimage1')
      this.toggledSideWindow = true
      doc2.classList.remove('hide')
      doc2.classList.add('visible')

    }else{
      doc.classList.toggle('spinimage1')
      this.toggledSideWindow = false
      doc2.classList.remove('visible')
      doc2.classList.add('hide')

    }
    

  }

 

}
