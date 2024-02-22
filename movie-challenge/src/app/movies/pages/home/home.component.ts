import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsContainerComponent } from '../../components/cards-container/cards-container.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'movies-home-pages',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CardsContainerComponent,
    PaginationComponent,
    FooterComponent,
  ],
})
export class HomePageComponent {
  numberPages: number = 1;
  idMovie: string = '';
  idSort: string = '';

  getNumberPage(page: any) {
    this.numberPages = page;
  }

  getIdMovie(id: any) {
    this.idMovie = id;
  }
  getSort(idMovieSort: any){
    this.idSort = idMovieSort;
  }
}
