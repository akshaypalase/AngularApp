import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges {

  @Input() public uid: number;
  
  constructor() {
    console.log();
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit() {
  }

}
