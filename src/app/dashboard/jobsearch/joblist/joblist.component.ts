import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mainService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute,private mainService:mainService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    this.firstSubscription()
  }
  ngOnDestroy(): void {
    this.firstSubscription().unsubscribe()
  }

  firstSubscription(){
    return this.mainService.getMessage().subscribe(
      res=>{
        console.log(res,'reshahahah')
      }
    )
  }

}
