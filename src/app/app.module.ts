import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsearchComponent } from './dashboard/jobsearch/jobsearch.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './registermodule/registermodule.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceModule } from './services/authmodule.service';
import {MatDialogModule} from '@angular/material/dialog';
import { DataService, mainService } from './services/subject.service';
import { EffectsModule } from '@ngrx/effects';
import { StartedGuard } from './authentication.guard';
import { HttpinterceptopService } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    RegisterModule,
    GraphQLModule,
    HttpClientModule,
    MatDialogModule,
    EffectsModule
  ],
  providers: [AuthServiceModule,mainService,DataService,{ provide: HTTP_INTERCEPTORS, useClass: HttpinterceptopService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
