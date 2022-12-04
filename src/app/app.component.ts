import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    // console.log("constructor called");
    

  }
  ngOnInit() {

    // console.log("ngOnInit called");
  }
  updatedata(){
    this.data="hi";
  }
  data="hello";
  uname : string ='hello good morning';
  childDataReceived : string="";

  EmployeeRecord :any=[
    {
      eName:"Tanmay",eCity:"Palghar",eSalary:"20000"
    },
    {
      eName:"Abhishek",eCity:"Mira-Bhayander",eSalary:"50000"
    },
    {
      eName:"Rohit",eCity:"Thane",eSalary:"35000"
    }
  ]
  receiveData(event:string){
    this.childDataReceived=event;
    
  }
}




