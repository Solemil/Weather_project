import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { cityList } from 'src/app/_models/cityList';
import { CardInfo } from 'src/app/_models/weather';
import { ResultCountry } from 'src/app/_models/weather';
import { ApiService, WeatherResults } from 'src/app/_services/api.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  readonly cardList: CardInfo[] = [];

  constructor(private apiService: ApiService) {
    this.initCities();
  }

  initCities(): void {
    cityList.forEach((city: string) => {
      this.getCityCardInfo(city)

    });
  }

  async getCardInfo(city: string): Promise<CardInfo | null> {
    let countryCode: string = '';
    let resultCardInfo: CardInfo = { name: city };
    await this.apiService.getWeather(city)
      .then((data: WeatherResults) => {
        resultCardInfo.temp = data.main.temp;
        resultCardInfo.icon = data.weather[0].main;
      countryCode = data.sys.country;
    }).catch(error =>{})
    if (!countryCode) {
      return null;
    }
    await this.apiService.getCountry(countryCode)
      .then((data: ResultCountry) => {
        resultCardInfo.country = data.name.common; 
      }).catch(error =>{})

    return resultCardInfo;
  }
  
  getCityCardInfo(city: string): void {
    this.getCardInfo(city)
        .then((card: CardInfo | null) => {
          if (card) {
            this.cardList.unshift(card);
          }
        })
  }

  removeCard(index: number): void {
    this.cardList.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cardList, event.previousIndex, event.currentIndex);
  }
}
