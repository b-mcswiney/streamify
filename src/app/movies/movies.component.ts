import { Component } from '@angular/core';
import { MoviehttpService } from '../service/moviehttp.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(public movieservice:MoviehttpService) {}
  movies:any;

  ngOnInit(): void {
    this.movieservice.getAllMovies()
      .subscribe(resp => {
        console.log('fetched response');
        console.log(resp);
        this.movies = resp;
      })
  }
}
