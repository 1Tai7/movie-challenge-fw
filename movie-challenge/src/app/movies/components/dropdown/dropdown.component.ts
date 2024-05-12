import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { buffer } from 'rxjs';

@Component({
  selector: 'movies-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class DropdownComponent {
  public movies: any = [];
  public genre: any = [];

  @Output() dropdownEvent = new EventEmitter<string>();
  @Output() sortEvent = new EventEmitter<string>();

  constructor(private http: HttpClient, private apiService: MoviesService) {}

  ngOnInit() {
    this.apiService.getGenre().subscribe((genre: any) => {
      return (this.genre = genre.genres);
    });
  }
  sendIdMovie(movie: string) {
    this.dropdownEvent.emit(movie);
  }
  sortBy(sort: string) {
    this.sortEvent.emit(sort);
  }
}
