import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WEATHER } from '../location-search/mock-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(): Observable<any[]> {
    const weather = of(WEATHER);
    return weather;
  }
}
