import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/weather/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getLocations(query: string): Observable<any> {
    return this.http.get(API_URL + 'location/search?query=' + query);
  }

  getForecastData(locationKey: number): Observable<any> {
    return this.http.get(API_URL + 'forecast?locationKey=' + locationKey)
  }
}
