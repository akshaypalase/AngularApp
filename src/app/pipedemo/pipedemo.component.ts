import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  price : number = 80000;

  obj ={
    id:1,
    name :'akshay'

  }
  observ;
  todaysDate= new Date();
  constructor(private _utilitySerivce:UtilityService) { 
     this.observ=this._utilitySerivce.userName;
  }

  ngOnInit() {
  }

}
