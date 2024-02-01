import { Component } from '@angular/core';
import { HeaderComponent } from './movies/components/header/header.component';
import { SelectsComponent } from './movies/components/selects/selects.component';
import { FooterComponent } from './movies/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, SelectsComponent, FooterComponent],
})
export class AppComponent {
  public title: string = 'movie-challenge';
}
