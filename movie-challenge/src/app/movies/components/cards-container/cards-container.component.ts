import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movies-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardsContainerComponent implements OnInit {
  movies: any[] = [];

  constructor(private apiService: MoviesService) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(data);
    });
  }
}
