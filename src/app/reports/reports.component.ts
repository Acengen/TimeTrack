import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports = [];
  dayNumber:number;
  d:Date;
  dayOfWeek:string;
  dateString:string;
  daydateYear:number;
  monthYear:number;
  getHourse:number;
  getMinutes:number;
  
  totalHour:number;
  totalSec:number;
  totalMin:number;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.d = new Date();
    this.dayNumber = this.d.getDay();
    this.daydateYear = this.d.getDate();
    this.monthYear = this.d.getMonth();
    if(this.dayNumber == 0){
      this.dayOfWeek = "Monday";
    }
    if(this.dayNumber == 1){
      this.dayOfWeek = "Tuesday";
    }
    if(this.dayNumber == 2){
      this.dayOfWeek = "Wednesday";
    }
    if(this.dayNumber == 3){
      this.dayOfWeek = "Thursday";
    }
    if(this.dayNumber == 4){
      this.dayOfWeek = "Friday";
    }
    if(this.dayNumber == 5){
      this.dayOfWeek = "Saturday";
    }
    if(this.dayNumber == 6){
      this.dayOfWeek = "Sunday";
    }
        /* Getting months if a date is 0,1,2... */

        if(this.monthYear == 0) {
          this.dateString = "Januar";
        }
        if(this.monthYear == 1) {
          this.dateString = "February"
        }
        if(this.monthYear == 2) {
          this.dateString = "March"; 
        }
    
        if(this.monthYear == 3) {
          this.dateString = "April";
        }
    
        if(this.monthYear == 4) {
          this.dateString = "May";
        }
    
        if(this.monthYear == 5) {
          this.dateString = "Jun";
        }
    
        if(this.monthYear == 6) {
          this.dateString = "Jul"
        }
    
        if(this.monthYear == 7) {
          this.dateString = "August";
        }
    
        if(this.monthYear == 8) {
          this.dateString = "September";
        }
    
        if(this.monthYear == 9) {
          this.dateString = "October";
        }
    
        if(this.monthYear == 10) {
          this.dateString = "November";
        }
    
        if(this.monthYear == 11) {
          this.dateString = "December";
        }


        this.reports = this.appService.getReports();
        this.totalSec = this.appService.totalSec;
        this.totalMin = this.appService.totalMin;
        this.totalHour = this.appService.totalHour;
  }

}
