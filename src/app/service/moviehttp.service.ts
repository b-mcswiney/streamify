import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviehttpService {

  url:string = "http://localhost:3000/movies"

  constructor(private http:HttpClient) { }

  getAllMovies():Observable<any> {
    return this.http.get<any>(this.url);
  }
  getMovieById(id:number):Observable<any> {
    return this.http.get<Movie>(this.url + '/' + id);
  }
}
