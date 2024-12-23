import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from '../model/filter';

@Component({
  selector: 'app-filtermovies',
  standalone: false,
  
  templateUrl: './filtermovies.component.html',
  styleUrl: './filtermovies.component.css'
})
export class FiltermoviesComponent {
  filter:any;
  genresList:string[];


  constructor(){
    this.filter = {name:'', genres: { family: false, action: false, scifi: false, adventure: false, disaster: false}, ratingMax: 10, ratingMin: 0};
    this.genresList = [];
  }

  @Output()
  empadded:EventEmitter<Filter> = new EventEmitter();

  filterMovies(event:Event) {
    console.log("submitted");

    if(this.filter.genres.family){
      this.genresList.push("family")
    }
    if(this.filter.genres.action){
      this.genresList.push("action")
    }
    if(this.filter.genres.scifi){
      this.genresList.push("scifi")
    }
    if(this.filter.genres.family){
      this.genresList.push("adventure")
    }
    if(this.filter.genres.disaster){
      this.genresList.push("disaster")
    }
    
    this.filter.genres = this.genresList;

    this.empadded.emit(this.filter);
    // this.filter = {name:'', genres: { family: false, action: false, scifi: false, adventure: false, disaster: false}, ratingMax: 10, ratingMin: 0};
    this.genresList = [];
  }
}
