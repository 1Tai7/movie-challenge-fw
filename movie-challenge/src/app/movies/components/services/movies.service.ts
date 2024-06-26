import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMoviesByGenre } from '../../interfaces/response.api';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  static goProducts(): any {
    throw new Error('Method not implemented.');
  }
  private apikey: string =
    localStorage.getItem('apikey') || import.meta.env.NG_APP_API_KEY || '';
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
  getGenre() {
    return this.http.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=es',
      {
        headers: this.requestOptions.headers,
      }
    );
  }
  getMovieGenre(idGenre: string) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${idGenre}`; // Adapta la URL según tu API
    const result = this.http.get<ResponseMoviesByGenre>(apiUrl, {
      headers: this.requestOptions.headers,
    });

    return result;
  }
  //sort_by=title.asc
  getSort(sort: string) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=${sort}`; // Adapta la URL según tu API
    const result = this.http.get(apiUrl, {
      headers: this.requestOptions.headers,
    });

    return result;
  }
}
