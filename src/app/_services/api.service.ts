import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environment/environment';
import { firstValueFrom } from 'rxjs';
import { ResultWeather, ResultCountry } from '../_models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  async getWeather(city: string): Promise<ResultWeather> {
    try {
      let url = `${env.weatherApi.baseURL}${env.weatherApi.getWeather}`;
      url = url.replace('{city name}', city);
      url = url.replace('{API key}', env.weatherApi.weatherApiKey);

      return await firstValueFrom(this.http.get<ResultWeather>(url))
        .then((res: ResultWeather) => {
          console.log('getWEather sikeres', res);
          return res;
        }
      );
    } catch (error) {
      console.error('getWEather sikertelen', error);
      throw error;
    }
  }

  async getCountry(countryCode: string): Promise<ResultCountry> {
    try {
      let url = env.countryApi.baseURL
      url = url.replace('{Code}', countryCode)

      return await firstValueFrom(this.http.get<ResultCountry[]>(url))
        .then((res: ResultCountry[]) => {
          console.log('getCountry sikeres', res);
          return res[0];
        }
      );
    } catch (error) {
      console.error('getCountry sikertelen', error);
      throw error;
    }
  }




}



