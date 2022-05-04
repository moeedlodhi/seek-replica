import { Component, OnInit } from '@angular/core';
import { AuthServiceModule } from 'src/app/services/authmodule.service';

@Component({
  selector: 'app-jobsubsearch',
  templateUrl: './jobsubsearch.component.html',
  styleUrls: ['./jobsubsearch.component.css']
})
export class JobsubsearchComponent implements OnInit {

  constructor(private authservice:AuthServiceModule) { }

  ngOnInit(): void {

   

  }

}
