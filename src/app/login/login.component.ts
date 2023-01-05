import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route :Router,private _authService:AuthService) { }

  ngOnInit() {
  }
// onSub(){
//   const demoservice = new DemoService();
//   demoservice.display();
// }
checkuser(uname,pass){
  
  var output=this._authService.checkUserNameandPassword(uname,pass)
  if(output == true){
    window.alert('login successfully')
    this._route.navigate(['product'])
  }else{
    window.alert('Invalid username and password')
    
  }
  
  // if(uname=='admin' && pass=='admin' ){
  //    this._route.navigate(['product/tv']);
  // }
}

}
