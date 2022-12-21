import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tempassign',
  templateUrl: './tempassign.component.html',
  styleUrls: ['./tempassign.component.css']
})
export class TempassignComponent implements OnInit {

  constructor() { }
  deafaultValue : string ="Advanced";
  ngOnInit() {
  }
  submitForm(tempform:NgForm){
      console.log(tempform);
      console.log(tempform.value.email);
      console.log(tempform.value.Subscriptions);
      console.log(tempform.value.password);
  }
}
