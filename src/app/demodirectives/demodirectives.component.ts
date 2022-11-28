import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow : boolean=true;
  title : string='top 3 movies';
  movies : Movie[]=[
    {title:"3 Idiots",director:"Rajkumar",cast:"amir khan",releaseDate:"2022"},
    {title:"kgf",director:"Rockeybhai",cast:"yash ",releaseDate:"2019"},
    {title:"RRR",director:"SS Rajamauli",cast:"JR NTR,Ram charan",releaseDate:"2022"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
