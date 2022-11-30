import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  uname : string ='hello good morning';

  EmployeeRecord :any=[
    {
      eName:"Tanmay",eCity:"Palghar",eSalary:"20000"
    },
    {
      eName:"Abhishek",eCity:"Borivali",eSalary:"50000"
    }
  ]
}

