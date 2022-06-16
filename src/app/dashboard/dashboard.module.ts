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
import { HighlightDirective } from './directives/highlight.directive';
import { HidesideDirective,DropdownDirective } from './directives/hideside.directive';
import { GettingstartedComponent } from './profile/gettingstarted/gettingstarted.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MinimenuDirective } from './directives/minimenu.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'

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
        JoblistComponent,
        HighlightDirective,
        HidesideDirective,
        DropdownDirective,
        GettingstartedComponent,
        MinimenuDirective
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        BrowserModule,
        MatMenuModule,
        MatListModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule
  
    ]
    ,exports:[

    ]
})
export class DashboardModule{

}