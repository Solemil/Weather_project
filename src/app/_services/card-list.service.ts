import { Injectable } from '@angular/core';
import { CardInfo, ResultWeather, ResultCountry } from 'src/app/_models/interfaces';
import { cityList } from '../_models/cityList';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  readonly cardList: CardInfo[] = [];


  constructor(private apiService: ApiService) {
    this.initCities();
  }

  initCities(): void {
    cityList.forEach((city: string) => {
      this.pushCardInfo(city);
    });
  }

  async getCardInfo(city: string): Promise<CardInfo | null> {
    let countryCode: string = '';
    let resultCardInfo: CardInfo = { name: city };

    await this.apiService.getWeather(city)
      .then((data: ResultWeather) => {
        resultCardInfo.temp = data.main.temp;
        resultCardInfo.icon = data.weather[0].icon;
      countryCode = data.sys.country;
    }).catch(error =>{

    })

    if (!countryCode) null;

    await this.apiService.getCountry(countryCode)
      .then((data: ResultCountry) => {
        resultCardInfo.country = data.name.common; 
      }).catch(error =>{

      })

    return resultCardInfo;
  }
  
  pushCardInfo(city: string): void {
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


}
