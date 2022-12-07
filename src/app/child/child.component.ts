import { Component, Input, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {

  // @Input() employee : any;

  @Input() data : string;

  counter;
  num:number=1;

  ngOnChanges(){
    console.log('data from parent to child component',this.data)
  }

  constructor() { 
    console.log('child constructor is called');
    
  }
  
  ngOnInit() {

    // console.log(this.employee);
    console.log('child ngOnit is called')
    this.counter=setInterval(()=>{
      this.num=this.num+1;
      console.log(this.num)
    },1000)
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
    clearInterval(this.counter);
  }

}
