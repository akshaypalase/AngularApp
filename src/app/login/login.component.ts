import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route :Router) { }

  ngOnInit() {
  }
// onSub(){
//   const demoservice = new DemoService();
//   demoservice.display();
// }
checkuser(uname,pass){
  if(uname=='admin' && pass=='admin' ){
     this._route.navigate(['product/tv']);
  }
}

}
