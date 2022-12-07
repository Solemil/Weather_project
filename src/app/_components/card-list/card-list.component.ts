import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
// import { cities } from 'src/app/_collections/mock/cities';
import { cityList } from 'src/app/_models/cityList';

// import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  readonly cities: any[] = cityList;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cities, event.previousIndex, event.currentIndex);
  }
}
