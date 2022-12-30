import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  //In Subject we can't initialize value
//  userName = new Subject<any>();

//In BehaviorSubject we can initialize value
 userName=new BehaviorSubject('javascript');
 
  constructor() { }
}
