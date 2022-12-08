import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { CardListService } from 'src/app/_services/card-list.service';
import { CardInfo } from 'src/app/_models/interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})

export class CardListComponent {

  cardList: CardInfo[] = this.cardListService.cardList

  constructor(private cardListService: CardListService) { 
  }

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event);
    if (event.isPointerOverContainer) {
      moveItemInArray(this.cardListService.cardList, event.previousIndex, event.currentIndex);
    } else {
      this.cardListService.removeCard(event.currentIndex)
    }
  }

  pushCardInfo(event: string) {
    this.cardListService.pushCardInfo(event)
  }

  removeCard(index: number) {
    this.cardListService.removeCard(index);
  }


}
