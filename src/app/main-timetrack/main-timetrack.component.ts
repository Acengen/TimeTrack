import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { timer } from "rxjs";
import { getLocaleDayNames } from '@angular/common';


@Component({
  selector: 'app-main-timetrack',
  templateUrl: './main-timetrack.component.html',
  styleUrls: ['./main-timetrack.component.css']
})
export class MainTimetrackComponent implements OnInit {
  
  stopTime:string;
  isRunning:boolean;
  sec:number = 0;
  min:number = 0;
  hour:number = 0;
  zeroText:string = "0";
  dayNumber:number;
  d:Date;
  dayOfWeek:string;
  dateString:string;
  daydateYear:number;
  monthYear:number;
  getHourse:number;
  getMinutes:number;

  reportPage:boolean;

  totalHour:number;
  totalMin:number;
  totalSec:number;

  constructor(private appService:AppService) { }

  ngOnInit() {
    //here i m using service to emit and subscribe
    //service name app.service.ts
    this.reportPage = this.appService.reportPageActive;
    this.appService.totalSecEmitter.subscribe(
      (totalsec:number) => this.totalSec = totalsec
    )

    this.appService.totalMinEmitter.subscribe(
      (totalmin:number) => this.totalMin = totalmin
    )

    this.appService.totalHourEmitter.subscribe(
      (totalh:number) => this.totalHour = totalh
    )

    this.d = new Date();
    this.dayNumber = this.d.getDay();
    this.daydateYear = this.d.getDate();
    this.monthYear = this.d.getMonth();
    this.getHourse = this.d.getHours();
    this.getMinutes = this.d.getMinutes();

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

    
    this.appService.stopTimeEmitter.subscribe(
      (stime:string) => this.stopTime = stime
    )

    timer(0, 1000).subscribe(ellapsedCycles => {
      if(this.isRunning) {
        this.sec++;
        
      }
    });
    timer(0, 60000).subscribe(ellapsedCycles => {
      if(this.isRunning) {
        this.min++;
      }
    });
    timer(0, 1000 * 60 * 60).subscribe(ellapsedCycles => {
      if(this.isRunning) {
        this.hour++;
       
      }
    });

  }


  //method call on every click, like a switcher
  //Stop and report time and then continue
  StopTime() {
    this.isRunning = !this.isRunning;
    if(!this.isRunning) {
      this.stopTime = "" + this.hour + "h" + ":" + this.min + "m" + ":" + this.sec;//converting to a string for html
      this.appService.addToReport(this.stopTime);
      this.appService.totalTimeSpent(this.hour,this.min,this.sec);
     
    }
  }

  onToReport() {
      this.appService.onToReportsPage();
  }
}
