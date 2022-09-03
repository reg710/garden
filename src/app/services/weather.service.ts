import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEATHER } from '../location-search/mock-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl = "https://visual-crossing-weather.p.rapidapi.com/history";

  constructor(
    private http: HttpClient,
  ) { }

  getWeather(): Observable<any> {
    // const weather = of(WEATHER);
    // return weather;
    console.log('starting request');
    console.log('headers');
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    });
    console.log(headers);
    let params = {
        startDateTime: '2022-08-27T00:00:00',
        aggregateHours: '24',
        location: 'Pittsburgh,PA,USA',
        endDateTime: '2022-08-28T00:00:00',
        unitGroup: 'us',
        contentType: 'json',
        shortColumnNames: '0'
    }
    console.log('params');
    console.log(params)
    let options = {
      headers: headers,
      params: params,
    }
    return this.http.get(this.weatherUrl, options)
  }
}