import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
employee = new Employee();
submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onsubmit(form:NgForm){
    this.submitted = true;
   this.employee.username=form.value.username;
   this.employee.email=form.value.email;
   this.employee.course=form.value.course;
   this.saveEmployeeData(this.employee);
  }
  saveEmployeeData(emp:Employee){
    console.log(emp.username);
    console.log(emp.email);
    console.log(emp.course);
  }
}
