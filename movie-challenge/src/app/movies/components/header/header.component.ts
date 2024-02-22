import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'movies-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [DropdownComponent],
})
export class HeaderComponent {
  @Output() headerIdEvent = new EventEmitter<string>();
  @Output() sortIdEvent = new EventEmitter<string>();

  idGenre(idGenre: string) {
    this.headerIdEvent.emit(idGenre);
  }
  idMovie(idSort: string) {
    this.sortIdEvent.emit(idSort);
  }
}
