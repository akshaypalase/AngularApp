import { Component, OnInit } from '@angular/core';

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
    {Course:"3 Idiots",Duration:"Rajkumar",CourseFee:"amir khan",CourseType:"2022"},
    {Course:"kgf",Duration:"Rockeybhai",CourseFee:"yash ",CourseType:"2019"},
    {Course:"RRR",Duration:"SS Rajamauli",CourseFee:"JR NTR,Ram charan",CourseType:"2022"},
    {Course:"kgf",Duration:"Rockeybhai",CourseFee:"yash ",CourseType:"2019"},
    {Course:"kgf",Duration:"Rockeybhai",CourseFee:"yash ",CourseType:"2019"},
    {Course:"kgf",Duration:"Rockeybhai",CourseFee:"yash ",CourseType:"2019"}
  ]

  ngOnInit() {
  }

}
