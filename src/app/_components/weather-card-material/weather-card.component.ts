import { Component, Input, OnInit } from '@angular/core';
import { cityList } from 'src/app/_models/cityList';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() cityShown: string = '';

  temp = 1;
  icon = '';

  constructor(private apiService: ApiService) {}

  showConfig(param: any) {
    console.log(param);
    this.apiService.getWEather(param).then((data: any) => {
      this.temp = data.main.temp;
      this.icon = data.weather[0].main;
      console.log(this.icon);
    });
  }

  ngOnInit() {
    this.showConfig(this.cityShown);
  }

  closeCard(value: string) {
    console.log(value);
    console.log(cityList.indexOf(value));
    cityList.splice(cityList.indexOf(value), 1);
  }
}
