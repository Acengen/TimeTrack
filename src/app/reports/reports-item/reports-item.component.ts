import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports-item',
  templateUrl: './reports-item.component.html',
  styleUrls: ['./reports-item.component.css']
})
export class ReportsItemComponent implements OnInit {
  @Input() reportString:string;
  constructor() { }

  ngOnInit(): void {
  }

}
