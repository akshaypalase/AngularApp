import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrls: ['./structuraldirective.component.css']
})
export class StructuraldirectiveComponent implements OnInit {
   
  isValid : boolean=false;

  constructor() { console.log("datta");}
  onChange(){
    this.isValid=!this.isValid;
    console.log("datta");
    
    
  }
  courses =[
    {CourseName:"Electrical",Duration:"4",CourseFee:"70000",CourseType:"Offline"},
    {CourseName:"Civil",Duration:"4",CourseFee:"80000 ",CourseType:"Offline"},
    {CourseName:"Mechanical",Duration:" 4",CourseFee:"65000",CourseType:"Offline"},
    {CourseName:"Electronics & Telecommunication",Duration:"3",CourseFee:"67000 ",CourseType:"Offline"},
    {CourseName:"Chemical",Duration:"3.5",CourseFee:"60000 ",CourseType:"Offline"},
    {CourseName:"Mechatronics",Duration:"2.5",CourseFee:"55000 ",CourseType:"Offline"}
  ]
    selectedPro : string;
  getProductVal(value : any){
    console.log(value.target.value);
    this.selectedPro=value.target.value;
  }

  ngOnInit() {

    
  }

}
