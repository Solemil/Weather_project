import { Component } from '@angular/core';
import { cities } from 'src/app/_collections/mock/cities';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  readonly cities: any[] = cities;

  constructor(private apiService: ApiService) {
    this.apiService.testGetData();
  }
}
