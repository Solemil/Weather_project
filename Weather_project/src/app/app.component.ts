import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
// import { Observable } from 'rxjs-observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  readonly ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a85aede88ad10fb030e055694b6eb19e&units=standard';

  posts: any;

  constructor(public http: HttpClient) {}

  title = 'Weather_project';

  cities = [
    {
      name: 'Budapest',
      country: 'Hungary',
      temp: '16',
      weather: 'cloudy',
    },
    {
      name: 'Paris',
      country: 'France',
      temp: '20',
      weather: 'sunny',
    },
    {
      name: 'London',
      country: 'United Kingdom',
      temp: '14',
      weather: 'rainy',
    },
  ];

  public getData() {
    let post = this.http.get(this.ROOT_URL).subscribe(data => {
      this.posts = data;
  });
    console.log(this.posts);
  }
}

