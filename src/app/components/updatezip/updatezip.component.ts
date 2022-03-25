import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-updatezip',
  templateUrl: './updatezip.component.html',
  styleUrls: ['./updatezip.component.css']
})
export class UpdatezipComponent implements OnInit {

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }


  onsubmit(updatezip:NgForm) {
    this.service.accounthandling({"username": localStorage.getItem("username"), "zipcode": updatezip.value.zipcode},"changezip").subscribe(data => {
        localStorage.setItem("zipcode", updatezip.value.zipcode)
        setTimeout(() => {
          window.location.href="/"
        },3000)    
    })
  }


}
