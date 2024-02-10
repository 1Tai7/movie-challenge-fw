import { Component, Input, OnInit } from '@angular/core';
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
  @Input() set numPage(value: number) {
    this.getPage(value);
  }

  constructor(private apiService: MoviesService) {}

  ngOnInit(): void {
    this.getPage(1);
  }
  getPage(page: number) {
    this.apiService.goProducts(page).subscribe((data: any) => {
      console.log('data', data);
      this.movies = data.results.map((movies: any) => ({
        ...movies,
        release_year: new Date(movies.release_date).getFullYear(),
      }));
    });
  }
}
