import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movies-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PaginationComponent {
  public currentPage: number = 1;
  public totalPages: number = 10;

  @Output() paginatorEvent = new EventEmitter<number>();


  constructor(private apiService: MoviesService) {}

  onClick(counter: number): void {
    this.currentPage = this.currentPage + counter;
    this.paginatorEvent.emit(this.currentPage);

  }
}
