import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environment/environment';
import { weatherTestLocation } from '../_collections/mock/mock';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  async testGetData(): Promise<WeatherResults> {
    try {
      let url = `${env.api.baseURL}${env.api.getWeather}`;
      // url = url.replace('{lat}', weatherTestLocation.lat.toString());
      // url = url.replace('{lon}', weatherTestLocation.lon.toString());
      url = url.replace('{city name}', weatherTestLocation.name.toString());
      url = url.replace('{API key}', env.api.weatherApiKey);

      return await firstValueFrom(this.http.get<WeatherResults>(url)).then(
        (res: WeatherResults) => {
          console.log('testGetData sikeres', res.main.temp);
          return res;
        }
      );
    } catch (error) {
      console.error('testGetData sikertelen', error);
      throw error;
    }
  }

  async getWEather(location: Location): Promise<WeatherResults> {
    try {
      let url = `${env.api.baseURL}${env.api.getWeather}`;
      url = url.replace('{lat}', weatherTestLocation.lat.toString());
      url = url.replace('{lon}', weatherTestLocation.lon.toString());
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

export interface Location {
  name: string;
  lon: number;
  lat: number;
}

export interface WeatherResults {
  main: {
    temp: number;
  };
}
