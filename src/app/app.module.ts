import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedataComponent } from './moviedata/moviedata.component';
import { FiltermoviesComponent } from './filtermovies/filtermovies.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviedataComponent,
    FiltermoviesComponent,
    HeaderComponent,
    LoginComponent,
    PagenotfoundComponent,
    MyreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
