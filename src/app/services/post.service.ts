import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { devAPIUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private htttpclient : HttpClient) { }

getPosts(): Observable<any>{
  return this.htttpclient.get(`${devAPIUrl}posts`)
}
deletePostById(id){
  return this.htttpclient.delete(`${devAPIUrl}posts/`+id);
}
}

