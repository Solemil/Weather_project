import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ApiService} from 'src/app/_services/api.service';

import { cityList } from 'src/app/_models/cityList';
import { CardInfo, ResultWeather, ResultCountry } from 'src/app/_models/interfaces';

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

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cardList, event.previousIndex, event.currentIndex);
  }
}
