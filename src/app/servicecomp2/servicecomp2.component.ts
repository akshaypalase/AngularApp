import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {

  constructor(private _demoService:DemoService) { }
  products={};
  ngOnInit() {
    this.products=this._demoService.products;
  }
//   onSubscribe(){
//     this._demoService.display();
//   }
 }
