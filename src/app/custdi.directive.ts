import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdi]'
})
export class CustdiDirective {

  constructor(private el: ElementRef,private render: Renderer2) { 
    // console.log('custom directive applied');
    // console.log('custom directive applied');
    // el.nativeElement.style.backgroundColor='gray';
    render.setStyle(el.nativeElement,'backgroundColor','yellow')
  }

}
