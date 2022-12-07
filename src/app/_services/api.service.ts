import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environment/environment';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}



  async getWEather(city: string): Promise<WeatherResults> {
    try {
      let url = `${env.api.baseURL}${env.api.getWeather}`;
      url = url.replace('{city name}', city);
      url = url.replace('{API key}', env.api.weatherApiKey);

      return await firstValueFrom(this.http.get<WeatherResults>(url)).then(
        (res: WeatherResults) => {
          console.log('getWEather sikeres', res);
          return res;
        }
      );
    } catch (error) {
      console.error('getWEather sikertelen', error);
      throw error;
    }
  }
}

export interface WeatherResults {
  main: {
    temp: number;
  };
}

export interface WeatherInCity {
  // name: string;
  // country: string;
  temp: number;
  // weather: string
}

