import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public location: string = '';
  public weatherReports: any[] = [];
  public selectedReport: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  public showPrecipitation(report: any): void {
    this.selectedReport = report
  }

  public getWeather(): void {
    this.weatherService.getWeather()
      .subscribe(reports => this.weatherReports = reports);
  }
}
