import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() employee : any;

  @Input() data : string;

  ngOnChanges(){
    console.log('data from parent to child component',this.data)
  }

  constructor() { }
  
  ngOnInit() {

    // console.log(this.employee);
    
  }

}
