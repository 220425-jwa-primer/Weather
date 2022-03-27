import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { GetcoordService } from '../../services/getcoord.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
message:  any[] = [];
messenger:  any[] = [];
city: any;
  constructor(private dataService: DataService,private location:GetcoordService) { }

  ngOnInit(): void {
  this.location.getlocation().pipe(switchMap(coords => {this.city = coords.name
    return this.dataService.getWeatherData(coords.lat,coords.lon)})).subscribe(data => {this.message = data.alerts})
  }
    
}
