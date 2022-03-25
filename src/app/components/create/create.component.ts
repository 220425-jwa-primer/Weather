import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  showErrorMessage: boolean = false;

  onsubmit(create:NgForm) {
    this.service.accounthandling(create.value,"creating").subscribe(data => {
      if (data == false) {
        this.showErrorMessage = true
      }
      else {
        localStorage.setItem("username",data.username)
        localStorage.setItem("zipcode", data.zipcode)
        setTimeout(() => {
          window.location.href="/"
        },3000)    
      }
    })
  }

}
