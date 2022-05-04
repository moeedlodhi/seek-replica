import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RegisterRoutingModule } from "./registermodule-routing.module";
import { RegistermoduleComponent } from "./registermodule.component";
import { LoginmoduleComponent } from "./loginmodule/loginmodule.component";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueComponentComponent } from './dialogue-component/dialogue-component.component';




@NgModule({
    declarations:[
        RegistermoduleComponent,
        LoginmoduleComponent,
        DialogueComponentComponent
    ],
    imports:[
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RegisterRoutingModule,
        MatDialogModule


    ],
    exports:[

    ],
    entryComponents:[
        DialogueComponentComponent
    ]
})
export class RegisterModule{}