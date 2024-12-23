import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [
  {path: "", redirectTo:'movies', pathMatch:"full"},
  {path: "movies", component:MoviesComponent},
  {path: "login", component:LoginComponent},
  {path: "myreviews", component:MyreviewsComponent, canActivate:[authGuard]},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
