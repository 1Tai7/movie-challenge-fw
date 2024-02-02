import { Component } from '@angular/core';
import { HeaderComponent } from './movies/components/header/header.component';
import { FooterComponent } from './movies/components/footer/footer.component';
import { PaginationComponent } from './movies/components/pagination/pagination.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent,  FooterComponent, PaginationComponent],
})
export class AppComponent {
  public title: string = 'movie-challenge';
}
