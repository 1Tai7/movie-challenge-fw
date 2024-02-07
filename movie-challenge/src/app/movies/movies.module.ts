import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { HomePageComponent } from './pages/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';


@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CardsContainerComponent,
    HomePageComponent,
    DropdownComponent,
  ],
  declarations: [],
})
export class MoviesModule {}
