import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'movies-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [DropdownComponent]
})
export class HeaderComponent {

}
