import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  onSubmit(collegeform:NgForm){
    console.log(collegeform);
    console.log(collegeform.value.Email);
    console.log(collegeform.value.Name);
    
    
    
  }

}
