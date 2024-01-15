import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service'
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;
  locationList= [];
  search: any;
  selectedLocation: any;
  weatherData: any;
  currentData: any;
  isLoggedIn: any;

  constructor(private weatherService: WeatherService, private storageService: StorageService, private router: Router) {
    this.isLoggedIn = false;
   }
  
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['login'])
    }
  }

  searchLocation(event: any) {
    console.log(event)
    this.weatherService.getLocations(event.target.value).subscribe({
      next: data => {
        this.locationList = data;
      },
      error: err => {
        console.log(err)
      }
    })
  }
  getForecast(locationKey: any) {
    this.weatherService.getForecastData(locationKey).subscribe({
      next: data => {
        this.weatherData = data
      },
      error: err => {
        console.log(err)
      }
    })
    this.weatherService.getCurrentConfitions(locationKey).subscribe({
      next: data => {
        this.currentData = data
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
