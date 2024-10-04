import { Component } from '@angular/core';
import { RickmortyComponent } from '../rickmorty/rickmorty.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RickmortyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
