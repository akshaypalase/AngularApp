import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
notAllowedNames=['codemind','technology']

  genders = [{
    id : '1',
    value: "male"
  },
  {
     id:'2',
     value:"female"
  }]
  

myReactiveForm : FormGroup;
  constructor() {
    this.createForm();
   }

  
  ngOnInit() {
  //   
  setTimeout(()=>{
    this.myReactiveForm.patchValue({
     'userDetails' : {
       'username' : "akshay",
       'Email'    :  "akshaypalase6@gmail.com"
     },
     })
    }, 3500);
   }

 createForm (){
  this.myReactiveForm= new FormGroup({
    'userDetails' : new FormGroup({
    'username' : new FormControl('',[Validators.required,this.NaNames.bind(this)]),
    'Email'    : new FormControl('',[Validators.required,this.NaEmails]),
  }),
    'course'   : new FormControl(''),
    'gender'   : new FormControl('')
  })
 }
 onSubmit(){
  console.log(this.myReactiveForm);
  
 }

 NaNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value) !== -1){
    return {'namesNotAllowed' : true}
  }
  return null;
 }
 NaEmails(control:FormControl): Promise<any> | Observable<any> 
 {const myResponse = new Promise<any>((resolve, reject) => {
  setTimeout(() => {
    if(control.value === 'codemindtechnology@gmail.com'){
      resolve({'emailNotAllowed': true})
} else {
  resolve(null)
}
}, 3000);
})
return myResponse;
}
}
