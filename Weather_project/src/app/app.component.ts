import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
