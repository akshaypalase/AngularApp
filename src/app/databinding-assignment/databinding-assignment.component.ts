import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent  {
   username : string ="akshay palase";
   x : boolean=false;

  constructor() { }
  
  resetall(){
    this.username="";
    this.x=true;
    
  }
  datta(){
    this.x=false;
    console.log("datta");
    
  }
  
  


  
 

 

}
