import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetcoordService } from 'src/app/services/getcoord.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serviceinfo:GetcoordService, private router:Router) { }

  status : any 
  ngOnInit(): void {
    this.status = localStorage.getItem("username")
  }

  logout() {
    localStorage.clear()
    setTimeout(() => {
      window.location.href="/"
    },3000)    
  }
  
  onsubmit(zipform: any) {
    console.log(zipform.value.zipcode)
    this.serviceinfo.getzipnum(zipform.value.zipcode)
    setTimeout(() => {
      this.router.navigate(['/'])
    },3000)


}
}
