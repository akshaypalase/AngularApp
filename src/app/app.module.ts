import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingAssignmentComponent } from './databinding-assignment/databinding-assignment.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AngularpraticeComponent } from './angularpratice/angularpratice.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { AttriComponent } from './attri/attri.component';
import { CustdiDirective } from './custdi.directive';
import { HooksComponent } from './hooks/hooks.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingAssignmentComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    AngularpraticeComponent,
    StructuraldirectiveComponent,
    AttriComponent,
    CustdiDirective,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
