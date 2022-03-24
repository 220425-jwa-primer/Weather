import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat:any, long:any): Observable<any> {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,daily&appid=93c9227aceb12421211cb7e287943d9b')
  }
  /** 
  getForecast(lat:any, long:any): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,minutely,current,alerts&appid=912a4ddecbe3395a54af628f0a6b7b6e`)

  }
*/

}