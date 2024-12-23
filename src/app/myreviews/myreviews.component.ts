import { Component } from '@angular/core';
import { MoviehttpService } from '../service/moviehttp.service';
import { UserService } from '../service/user.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-myreviews',
  standalone: false,
  
  templateUrl: './myreviews.component.html',
  styleUrl: './myreviews.component.css'
})
export class MyreviewsComponent {
  movies:Movie[] = [];
  filteredList:Movie[] = [];
  masterList:Movie[] = [];
  userID:any;
  username:any;

  constructor(public movieservice:MoviehttpService, public userservice:UserService) {}

  ngOnInit(): void{
    console.log("init");

    this.username=localStorage.getItem("username");
    this.userID=localStorage.getItem("id");
    this.movieservice.getAllMovies()
      .subscribe(resp => {
        this.movies = resp;

        this.filterMovies();
      })
  }

  filterMovies() {
    for(let movie of this.movies){
      let found=false;
      for(let rating of movie.ratings){
        if(rating.user == this.userID){
          found=true;
        }
      }
      if(found){
        this.filteredList.push(movie);
      }
    }

    this.movies = this.filteredList;
    this.filteredList = [];
  }
}
