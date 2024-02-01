import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectsComponent } from './components/selects/selects.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    SelectsComponent,
    FooterComponent,

  ],


})
export class MoviesModule {}
