import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcoordService {

  constructor(private http:HttpClient) { }
  
  getzip() {
    if(localStorage.getItem("zipcode")) {
      return localStorage.getItem("zipcode")
    }
    else {
      return "20001"
    }
  }

  zipnum:any = this.getzip()

  getzipnum(zip:number) {
    this.zipnum = zip
  }

  getlocation():Observable<any> {
    return this.http.get<any>(`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zipnum},us&appid=93c9227aceb12421211cb7e287943d9b
    `)
  }


}
