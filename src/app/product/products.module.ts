import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const proRoutes : Routes =[
  {path:'',component:ProductComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingmachine',component:WashingmachineComponent},
  
  ]},
]

@NgModule({
  declarations: [
    TvComponent,
    LaptopComponent,
    TabletComponent,
    WashingmachineComponent,
    ProductComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('product module called');
    
  }
}
