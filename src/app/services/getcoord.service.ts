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
    return this.http.get<any>(`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zipnum},us&appid=912a4ddecbe3395a54af628f0a6b7b6e`)
  }


}
