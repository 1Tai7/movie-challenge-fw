import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'movies-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class DropdownComponent {
 private movies: Array<{ text: string }> = [];

  constructor() {
    this.movies = [
      { text: 'Acción' },
      { text: 'Aventura' },
      { text: 'Comedia' },
      { text: 'Ciencia Ficción' },
      { text: 'Fantasía' },
      { text: 'Misterio' },
      { text: 'Romance' },
      { text: 'Thriller' },
      { text: 'Terror' },
    ];



  }

  get movie() {
    return this.movies;
  }

private compareMovies(a: {text: string}, b: {text: string}): number{
 if (a.text < b.text) {
    return -1;
  } else if (a.text > b.text) {
    return 1;
  } else {
    return 0;
  }


    this.movies.sort(this.compareMovies);
    this.movies.sort((a, b) => b.text.localeCompare(a.text));

}

}
