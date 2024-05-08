import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  public p = 1;
  
  constructor() { }

  search() {
    console.log('Searching for:', this.searchTerm);
  }
}
