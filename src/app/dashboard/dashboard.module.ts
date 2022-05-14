import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CareeradviceComponent } from "./careeradvice/careeradvice.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { JobsearchComponent } from "./jobsearch/jobsearch.component";
import { JobsubsearchComponent } from "./jobsearch/jobsubsearch/jobsubsearch.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatListModule } from "@angular/material/list";
import { DisableDivDirective, DisableDivDirective2, DisableDivDirective3 } from './directives/disable-div.directive';
import { HeaderComponent } from "../header/header.component";
import {MatMenuModule} from '@angular/material/menu';
import { JoblistComponent } from './jobsearch/joblist/joblist.component';


@NgModule({
    declarations:[
        DashboardComponent,
        JobsearchComponent,
        JobsubsearchComponent,
        ProfileComponent,
        CareeradviceComponent,
        DisableDivDirective,
        DisableDivDirective2,
        DisableDivDirective3,
        HeaderComponent,
        JoblistComponent
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        BrowserModule,
        MatMenuModule,
        MatListModule
    ]
    ,exports:[

    ]
})
export class DashboardModule{

}