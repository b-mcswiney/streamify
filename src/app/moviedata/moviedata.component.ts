import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-moviedata',
  standalone: false,
  
  templateUrl: './moviedata.component.html',
  styleUrl: './moviedata.component.css'
})
export class MoviedataComponent {
  total:number = 0;
  avgRating:number = 0;

  @Input()
  movie:Movie
    constructor() {
      this.movie = {id:1,name:'' ,genre: [] ,ratings: []};
    }

  ngOnInit() {
    for(let rating of this.movie.ratings){
      this.total = this.total + rating.rating;
    }

    this.avgRating = this.total/this.movie.ratings.length;
  }
}
