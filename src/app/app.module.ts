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
import { PassverifyComponent } from './passverify/passverify.component';
import { ChildComponent } from './child/child.component';
import { ChilddemoComponent } from './childdemo/childdemo.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginformComponent } from './loginform/loginform.component'; 


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
    HooksComponent,
    PassverifyComponent,
    ChildComponent,
    ChilddemoComponent,
    AddRemoveComponent,
    SimpletemplateformComponent,
    FormComponent,
    ReactiveformComponent,
    LoginformComponent,
    
 
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
