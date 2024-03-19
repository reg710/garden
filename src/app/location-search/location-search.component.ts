import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WEATHER } from '../../app/location-search/mock-weather';
import { of } from 'rxjs';
import { HistoricalWeather } from '../models/historical-weather.model';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public location: string = '';
  public weatherReports: any;
  public selectedReport: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
 
  }

  public showPrecipitation(report: any): void {
    this.selectedReport = report
  }

  public getWeather(): void {
    this.weatherService.getWeather()
      .subscribe(
        reports => {
          // this.weatherReports = reports
          console.log('in location search')
          console.log(reports);
          let testing = new HistoricalWeather(reports, '15201');
          console.log('--------------')
          console.log(testing)
        }

      );
    // of(WEATHER).subscribe(
    //   reports => {
    //     this.weatherReports = reports;
    //   }
    // );
  }
}
