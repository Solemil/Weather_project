import { Component } from '@angular/core';
import { cityList } from 'src/app/_models/cityList';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor() {
  }

  button = document.querySelector('button');
  inputValue = document.querySelector('#textField');

}
