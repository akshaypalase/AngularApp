import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
@Component({
  selector: 'app-tempassign',
  templateUrl: './tempassign.component.html',
  styleUrls: ['./tempassign.component.css']
})
export class TempassignComponent implements OnInit {
 user = new User();
 deafaultValue : string ="Advanced";
  constructor() { }
  
  
  ngOnInit() {
  }


  submitForm(tempform:NgForm){
      this.user.Name=tempform.value.username;
      console.log(this.user.Name);
      
  }


}
