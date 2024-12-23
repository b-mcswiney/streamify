import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  loginUser(username:string){
    return this.http.get<any>(this.url+"?username="+username);
  }

  isAuthenticated():boolean{
    return !!localStorage.getItem("username");
  }
  logout(){
    localStorage.removeItem("username");
  }
}
