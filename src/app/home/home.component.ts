import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { WeatherService } from '../_services/weather.service'
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  content?: string;
  locationList= [];
  search: any;
  selectedLocation: any;

  constructor(private weatherService: WeatherService) { }

  searchLocation(query: string) {
    console.log(query)
    this.weatherService.getLocations(query).subscribe({
      next: data => {
        this.locationList = data;
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
