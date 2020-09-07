import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn:'root'})
export class AppService {
    stopTime:string;
    reportPageActive:boolean = false;
    reportsTime= [];
    totalSec:number = 0;
    totalMin:number = 0;
    totalHour:number = 0;

    stopTimeEmitter = new EventEmitter<string>();
    reportAcitveEmitter = new EventEmitter<boolean>();
    totalSecEmitter = new EventEmitter<number>();
    totalMinEmitter = new EventEmitter<number>();
    totalHourEmitter = new EventEmitter<number>();

    getReports() {
      return this.reportsTime.slice();
    }

    //method for adding new time on every click on 'CLOCK OUT' button 
    addToReport(newtime:string) {
      this.reportsTime.push(newtime);
      this.stopTimeEmitter.emit(newtime);
      console.log(this.reportsTime);
    }

    onToReportsPage() {
      this.reportPageActive = true;
      this.reportAcitveEmitter.emit(this.reportPageActive);
    }

    onToHomePage() {
      this.reportPageActive = false;
      this.reportAcitveEmitter.emit(this.reportPageActive);
    }
    
    //method used in reports component for calculate total amount hours spent.
    totalTimeSpent(hour:number,min:number,sec:number) {
        this.totalSec += sec;
        this.totalSecEmitter.emit(this.totalSec);
        this.totalMin += min;
        this.totalMinEmitter.emit(this.totalMin);
        this.totalHour += hour;
        this.totalHourEmitter.emit(this.totalHour);
    }

}