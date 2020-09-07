import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isActive:boolean;

  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.appService.reportAcitveEmitter.subscribe(
      (isactive:boolean) => this.isActive = isactive
    )
  }

  goBackToHomepage() {
    this.router.navigate(["/"]);//navigating Programaticly using Router  
    this.appService.onToHomePage();

  }
}
