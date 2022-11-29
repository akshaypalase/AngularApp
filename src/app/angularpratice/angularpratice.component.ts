import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularpratice',
  templateUrl: './angularpratice.component.html',
  styleUrls: ['./angularpratice.component.css']
})
export class AngularpraticeComponent implements OnInit {

  myName : string ="akshay";

  constructor() { }

  myMethod(){
    return 'my channel name' +this.myName;
  }

  myappstatus : boolean=false; 
  status1 : string="online";
  status2 : string="offline";


  ngOnInit() {
  }

}
