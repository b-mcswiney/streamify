import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usernameInput:string;
  passwordInput:string;
  loginValid:boolean = true;

  constructor(private router:Router, private userserv:UserService) {
    this.usernameInput = "";
    this.passwordInput = "";
  }

  onSubmit(){
    console.log("login", this.usernameInput, this.passwordInput);
    this.loginValid = true;

    this.userserv.loginUser(this.usernameInput)
    .subscribe({
      next: resp=> {
        console.log(resp);
        if(resp !== undefined && resp.length != 0){
          for(let user of resp) {
            localStorage.setItem("username", this.usernameInput);
            this.router.navigate(['']);
          }
        }
        else{
          this.loginValid = false;
        }
      }
    })
  }
}