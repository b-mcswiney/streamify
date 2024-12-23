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
      this.movie = {id:1,name:'' ,genre: [] ,ratings: [], avgrating: 0};
    }
}
