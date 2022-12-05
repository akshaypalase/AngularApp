import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
     console.log("parent constructor is called");
    

  }
  ngOnInit() {

   console.log("parent ngOnInit is called");
  }
  updatedata(){
    this.data="hi";
  }
  data="hello";
  uname : string ='hello good morning';
  childDataReceived : string="";
  isChild=false;

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

  toggleChild(){
    this.isChild=!this.isChild;
  }
}




