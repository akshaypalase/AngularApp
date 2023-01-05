import { Component } from '@angular/core';
import { Post } from './models/post';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Getdata : any; 

  constructor(private _demoservice : DemoService,private _postService:PostService){
     console.log("parent constructor is called");
    
    
  }
  ngOnInit() {
    // this._demoservice.getuserdata().subscribe(data => {
 
    //   console.log('getting data from user',data);

    //  this.Getdata = data;
      
// })
// this._demoservice.getPosts().subscribe(result=>{
//   console.log('posts',result);
  
// })

   
  }

  
    
  // updatedata(){
  //   this.data="hi";
  // }
  // data="hello";
  uname : string ='hello good morning';
  childDataReceived : string="";
  isChild=false;

  EmployeeRecord :any=[
    {
      eName:"Tanmay",eCity:"Palghar",eSalary:"20000"
    },
    {
      eName:"Abhishek",eCity:"Mira-Bhayander",eSalary:"50000"
    },
    {
      eName:"Rohit",eCity:"Thane",eSalary:"35000"
    }
  ]
  receiveData(event:string){
    this.childDataReceived=event;
    
  }

  toggleChild(){
    this.isChild=!this.isChild;
  }
  username : string="hello";

  changedata(){
    this.username="hii";
  }

  childexist :boolean=true;

  destroy(){
    this.childexist=false;
  }
  DeletePost(){
    this._postService.deletePostById(1).subscribe(res => {
      console.log(res);
      
    })
  }
}




