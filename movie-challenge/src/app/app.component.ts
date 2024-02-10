import { Component } from '@angular/core';
import { HomePageComponent } from './movies/pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HomePageComponent, ],
})
export class AppComponent {
  public title: string = 'movie-challenge';
}
