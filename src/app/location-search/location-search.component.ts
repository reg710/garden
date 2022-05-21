import { Component, OnInit } from '@angular/core';
import { WEATHER } from './mock-weather';



@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public location: string = '';
  public weatherReports = WEATHER;
  public selectedReport: any;

  constructor() { }

  ngOnInit(): void {
  }

  public showPrecipitation(report: any): void {
    this.selectedReport = report
  }
}
