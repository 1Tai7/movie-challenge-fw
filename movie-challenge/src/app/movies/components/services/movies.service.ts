import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private apikey: string = localStorage.getItem('apikey') || '';
  constructor(private http: HttpClient) {}

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    Authorization: `Bearer ${this.apikey}`,
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };


  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?page=2', {
      headers: this.requestOptions.headers,
    });
  }
}

