import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  templateUrl: './childdemo.component.html',
  styleUrls: ['./childdemo.component.css']
})
export class ChilddemoComponent implements OnInit {

childData : string ="data from child component";
@Output() childStringData : EventEmitter<string>=new EventEmitter();
  constructor() { }
  employee :any=[];

  

  ngOnInit() {
    
  }
  sendData(){
    this.childStringData.emit(this.childData);
  }

}



