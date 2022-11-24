import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent  {
   username : string ="Codemind";
   x : boolean=false;

  constructor() { }
  
  resetall(){
    this.username="";
    this.x=true;
    
  }
  datta(){
    if(this.username.length>0){
      this.x=false;
    }
    else{
      this.x=true;
    }
    
    console.log("datta");
    
  }
  
  


  
 

 

}
