import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURl='https://jsonplaceholder.typicode.com/';
 products = [
  {name:'tablet', id:'101'},
  {name:'Mobile', id:'102'},
  {name:'TV', id:'103'}
 ]
  constructor(private http: HttpClient) { }
  display(){
    alert('subscribed successfully')
  }

  getuserdata() 
  {
    let users='users';
   return this.http.get(this.apiURl+users);
  }
getPosts(){
  let posts='posts';
  return this.http.get(this.apiURl+posts);
}
 
}

