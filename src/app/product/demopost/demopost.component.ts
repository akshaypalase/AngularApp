import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private _postService :PostService) { }
  arrPosts : Post[]=[];
  ngOnInit() {
    this. _postService.getPosts().subscribe(res =>{
      console.log('jsonplaceholder',res);
      this.arrPosts=res;
    })
  }

}
