import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators ,PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-reactiveassign',
  templateUrl: './reactiveassign.component.html',
  styleUrls: ['./reactiveassign.component.css']
})
export class ReactiveassignComponent implements OnInit {
datta : FormGroup;

genders = [
  {
    id:'1',
    value:'Female'
  },
  {
    id:'2',
    value:'Male'

  }
]

  constructor() {
    this.onCreate();
   }

  ngOnInit() {
  }
  onCreate(){
    this.datta= new FormGroup({
      'username' : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
      'lastName' : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      'Age'      : new FormControl('',[Validators.required,Validators.min(17),Validators.max(20),Validators.pattern('[0-9]+$')]),
      'email'    : new FormControl('',[Validators.required,Validators.email]),
      'phone'    : new FormControl('',),
      'gender'   :  new FormControl('',Validators.required),
      'password' :  new FormControl('',Validators.required),
      'confirm'  :  new FormControl('',Validators.required)

    })

    
  }
  onSubmit(){
    console.log(this.datta)
  }
}
