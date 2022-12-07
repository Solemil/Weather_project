import { Component } from '@angular/core';
import { cityList } from 'src/app/_models/cityList';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  name = 'searchBox';
  constructor() {}
  searchCity(searchText: string) {
    cityList.unshift(searchText);
  }
}
