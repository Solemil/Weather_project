import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CardInfo } from 'src/app/_models/interfaces';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent /* implements OnInit */ {
  @Input() cityCard: CardInfo = {};
  @Output() close = new EventEmitter<void>();
  constructor() {}

  closeCard() {
    this.close.emit();
  }
}
