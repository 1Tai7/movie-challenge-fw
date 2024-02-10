import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MoviesModule } from './movies/movies.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppComponent,
    CommonModule,
    BrowserModule,
    MoviesModule,
    HttpClientModule,

  ],
})
export class AppModule {





}
