import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-angularpratice',
  templateUrl: './angularpratice.component.html',
  styleUrls: ['./angularpratice.component.css']
})
export class AngularpraticeComponent implements OnInit {

  myReactiveForm:FormGroup;

  genders=[
    {id:'1' , value:'Male'},
    {id:'2' , value:'Female'}
  ];

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails':new FormGroup({
      'firstname':new FormControl('',[Validators.required]),
      'lastname':new FormControl('',[Validators.required]),
        }),
        'ege':new FormControl('',[Validators.required,Validators.min(17),Validators.max(20),Validators.pattern('[0-9]+$')]),
        'email':new FormControl('',[Validators.required,Validators.email]),
        'Phone':new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
        'city':new FormControl('Mumbai',[Validators.required]),
        'gender':new FormControl('',[Validators.required]),
        'password':new FormControl('',[Validators.required]),
        'cpassword':new FormControl('',[Validators.required])

         
      })
  }
  OnSubmit(){
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    

}
}