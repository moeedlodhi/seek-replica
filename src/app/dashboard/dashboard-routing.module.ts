import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard, StartedGuard } from "../authentication.guard";
import { CareeradviceComponent } from "./careeradvice/careeradvice.component";
import { DashboardComponent } from "./dashboard.component";
import { JoblistComponent } from "./jobsearch/joblist/joblist.component";
import { JobsearchComponent } from "./jobsearch/jobsearch.component";
import { JobsubsearchComponent } from "./jobsearch/jobsubsearch/jobsubsearch.component";
import { GettingstartedComponent } from "./profile/gettingstarted/gettingstarted.component";
import { ProfileComponent } from "./profile/profile.component";
import { CanActivate } from "@angular/router";

const routes:Routes=[
    
    {path:'',pathMatch:'full',redirectTo:'/dashboard/jobsearch/jobs'},
    {path:'dashboard',component:DashboardComponent,children:[

    {path:'jobsearch',component:JobsearchComponent,children:[
        {path:'jobs',component:JobsubsearchComponent},
        {path:'joblist',component:JoblistComponent}
    ]},
    {path:'profile',component:ProfileComponent,children:[
        {path:'gettingstarted',canActivate:[StartedGuard],component:GettingstartedComponent}
    ]},
    {path:'careeradvice',component:CareeradviceComponent}
]}]


@NgModule({
    imports:[
        RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})
    ],
    exports:[RouterModule]
})
export class DashboardRoutingModule{

}