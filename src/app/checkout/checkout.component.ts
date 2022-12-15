import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    checkout :FormGroup;
  constructor(private Formbuilder : FormBuilder) {
    this.checkout=Formbuilder.group({
      EmailAddress: new FormControl(),
      Pass: new FormControl()
    })
   }

  ngOnInit() {
  }
  postcheckout(){
    console.log(this.checkout)
    console.log(this.checkout.value)
  }

}
