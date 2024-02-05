import { Component } from '@angular/core';
import { HeaderComponent } from './movies/components/header/header.component';
import { FooterComponent } from './movies/components/footer/footer.component';
import { PaginationComponent } from './movies/components/pagination/pagination.component';
import { CardsContainerComponent } from './movies/components/cards-container/cards-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent,  FooterComponent, PaginationComponent, CardsContainerComponent],
})
export class AppComponent {
  public title: string = 'movie-challenge';
}
