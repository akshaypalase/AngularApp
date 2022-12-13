import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onsubmit(form:NgForm){
   
   console.log(form.value);
   
  }
}
