import { Component, EventEmitter, Output } from '@angular/core';
import { cityList } from 'src/app/_models/cityList';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @Output() searchSubmit = new EventEmitter<string>()
  name = 'searchBox';
  constructor() {}
  searchCity(searchText: string) {
    this.searchSubmit.emit(searchText);
  }
}
