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
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { TempassignComponent } from './tempassign/tempassign.component';
import { ReactiveassignComponent } from './reactiveassign/reactiveassign.component';
import { AngularpraticeComponent } from './angularpratice/angularpratice.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { PagenotfoundComponent } from './services/pagenotfound/pagenotfound.component';
import { DemopostComponent } from './product/demopost/demopost.component';
import {  HttpClientModule } from '@angular/common/http';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

import { PipepracticeComponent } from './pipepractice/pipepractice.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CountPipe } from './count.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingAssignmentComponent,
    DemodirectivesComponent,
    NgswitchComponent,
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
    CheckoutComponent,
    TempassignComponent,
    ReactiveassignComponent,
    AngularpraticeComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    PagenotfoundComponent,
    DemopostComponent,
    PostdetailsComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipedemoComponent,
    CountPipe,
    PipepracticeComponent,
    FilterpipeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module called');
    
  }
 }
