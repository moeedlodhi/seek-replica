import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../authentication.guard";
import { CareeradviceComponent } from "./careeradvice/careeradvice.component";
import { DashboardComponent } from "./dashboard.component";
import { JobsearchComponent } from "./jobsearch/jobsearch.component";
import { JobsubsearchComponent } from "./jobsearch/jobsubsearch/jobsubsearch.component";
import { ProfileComponent } from "./profile/profile.component";


const routes:Routes=[
    
    {path:'',pathMatch:'full',redirectTo:'/dashboard/jobsearch/jobs'},
    {path:'dashboard',component:DashboardComponent,children:[

    {path:'jobsearch',component:JobsearchComponent,children:[
        {path:'jobs',component:JobsubsearchComponent}
    ]},
    {path:'profile',component:ProfileComponent},
    {path:'careeradvice',component:CareeradviceComponent}
]}]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class DashboardRoutingModule{

}