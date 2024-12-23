import { Component } from '@angular/core';
import { MoviehttpService } from '../service/moviehttp.service';
import { Filter } from '../model/filter';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  standalone: false,
  
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies:any;
  filteredList:Movie[] = [];
  masterList:Movie[] = [];
  filter:Filter = {name:'', genres: [], ratingMax: 10, ratingMin: 0};
  
  constructor(public movieservice:MoviehttpService) {}

  ngOnInit(): void {
    this.movieservice.getAllMovies()
      .subscribe(resp => {
        console.log('fetched response');
        console.log(resp);
        this.movies = resp;
        this.masterList = this.movies;
        this.filterMovies();
      })
  }

  filterMovies() {
    for(let movie of this.masterList){
      if(movie.name == this.filter.name || this.filter.name == '' ){
        console.log("name passed")
        if(movie.genre.filter((i: any) => this.filter.genres.includes(i)).length > 0 || this.filter.genres.length == 0){
          if(movie.avgrating <= this.filter.ratingMax && movie.avgrating >= this.filter.ratingMin){
            this.filteredList.push(movie);
          }
        }
      }
    }

    this.movies = this.filteredList;
    this.filteredList = [];
  }

  newFilter(filter:any){
    console.log(filter);
    this.filter = filter;

    this.filterMovies()
  }
}
