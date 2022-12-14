import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})

export class SearchBoxComponent {
  @Output() searchSubmit = new EventEmitter<string>();
  
  constructor() {}
  
  searchCity(searchText: string) {
    this.searchSubmit.emit(searchText);
  }
}
