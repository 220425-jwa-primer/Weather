import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcurrentdayService {

  constructor(private http:HttpClient) { }


  n1(number:number): number[] {
    let times: number[] = []
    for(let i =1; i < 6; i++) {
      times.push(number-86400*i)
    }
    return times
  }
  timestamps: number[] = this.n1(Math.trunc(Date.now()/1000))

  getHistorical(lat:any, long:any): Observable<any> {
    let r1 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${this.timestamps[0]}&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
    let r2 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${this.timestamps[1]}&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
    let r3 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${this.timestamps[2]}&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
    let r4 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${this.timestamps[3]}&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
    let r5 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${this.timestamps[4]}&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
    return forkJoin([r1,r2,r3,r4,r5])
  }


}
