import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Employee, TempEmp } from '../modelss/employee';

@Component({
  selector: 'app-angularpratice',
  templateUrl: './angularpratice.component.html',
  styleUrls: ['./angularpratice.component.css']
})
export class AngularpraticeComponent implements OnInit {

  // empobj=new TempEmp();


  constructor() { }

 


  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    // this.empobj.username=form.value.username;
    // this.empobj.email=form.value.email;
    // this.empobj.subscription=form.value.subscription;
    // this.empobj.password=form.value.password
    console.log(form);
  }
}
