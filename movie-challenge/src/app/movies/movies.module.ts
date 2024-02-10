import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HomePageComponent } from './pages/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';

@NgModule({
  imports: [
    CommonModule,
    CardsContainerComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    HomePageComponent,
    DropdownComponent,
  ],
  declarations: [],
})
export class MoviesModule {}
