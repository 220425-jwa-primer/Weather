import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  showErrorMessage: boolean = false;

  onsubmit(login:NgForm) {
    this.service.accounthandling(login.value,"loggingin").subscribe(data => {
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
