import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustdi]'
})
export class CustdiDirective {

  constructor() { 
    console.log('custom directive applied');
    console.log('custom directive applied');
    
  }

}
