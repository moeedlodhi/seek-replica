import { Component, OnDestroy, OnInit } from '@angular/core';
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
  loader:boolean = false;


  constructor(private route:ActivatedRoute,private jobservice:JobSearchService) { 
   
  }

  ngOnInit(): void {
        

    this.route.queryParams.subscribe(
      async(res:any)=>{
        this.loader = true
        
        const res1 = await this.jobservice.jobsfilter(res.keywordJob,res.keywordRegion,res.keywordType).toPromise()
        this.jobs = res1
        setTimeout(()=>{
          this.loader = false

        },1000)
        
      }
    )
    
  }
  ngOnDestroy(): void {
    
  }

 

}
