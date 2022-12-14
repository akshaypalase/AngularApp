import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { DemopostComponent } from './product/demopost/demopost.component';
import { PagenotfoundComponent } from './services/pagenotfound/pagenotfound.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  
   {path:'postdetails/:id',component:PostdetailsComponent},
{path:'post',component:DemopostComponent},
{path:'adduser' , component:AdduserComponent , canDeactivate:[UnSavedChangesGuard]},
{path:'product' , canActivate:[AuthGuard], loadChildren:'./product/products.module#ProductsModule'},
{path:'orders' , loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy :PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('routing module called');
    
  }
}
