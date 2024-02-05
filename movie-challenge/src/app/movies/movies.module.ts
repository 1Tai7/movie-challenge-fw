import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CardsContainerComponent,
  ],
  declarations: [
    HomeComponent
  ],
})
export class MoviesModule {}
