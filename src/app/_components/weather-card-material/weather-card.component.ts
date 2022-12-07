import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { cityList } from 'src/app/_models/cityList';
import { CardInfo } from 'src/app/_models/weather';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent /* implements OnInit */ {
  @Input() cityCard: CardInfo = {};
  @Output() close = new EventEmitter<void>();
  constructor() {}


  // ngOnInit() {
  //   this.showConfig(this.cityShown);
  // }

  closeCard() {
    this.close.emit();
  }
}
