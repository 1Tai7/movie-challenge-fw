import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMoviesByGenre } from '../../interfaces/response.api';


@Injectable({ providedIn: 'root' })
export class MoviesService {
  private apikey: string = localStorage.getItem('apikey') || '';
  constructor(private http: HttpClient) {}
  public _dataSource: any = '';

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    Authorization: `Bearer ${this.apikey}`,
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  getdataSource(): [] {
    return this._dataSource;
  }

  setdataSource(data: any) {
    this._dataSource = data;
  }
  getMovieGenre(idGenre: string) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${idGenre}`; // Adapta la URL según tu API
    const result = this.http.get<ResponseMoviesByGenre>(apiUrl, {
      headers: this.requestOptions.headers,
    });

    return result;
  }
  //tarjetas
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie', {
      headers: this.requestOptions.headers,
    });
  }
  goProducts(currentPage: number) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?page=${currentPage}`; // Adapta la URL según tu API
    const result = this.http.get(apiUrl, {
      headers: this.requestOptions.headers,
    });

    return result;
  }
  //https://api.themoviedb.org/3/genre/movie/list?language=en
  getGenre() {
    return this.http.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=es',
      {
        headers: this.requestOptions.headers,
      }
    );
  }
}
