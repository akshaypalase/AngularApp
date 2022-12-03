import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges {

  @Input() public dat: string;
  
  constructor() {
    console.log("hook component constructor called");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit() {
    console.log("hook component ngOnInit called");
  }

}
