import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  applyFilter(filterValue: string) {
    //this.dataelement1.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
