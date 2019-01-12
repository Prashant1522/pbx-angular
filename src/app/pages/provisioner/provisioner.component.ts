import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-provisioner',
  templateUrl: './provisioner.component.html',
  styleUrls: ['./provisioner.component.css']
})
export class ProvisionerComponent implements OnInit {
  provisionerColumns1: string[] = ['settingsname', 'devicemodel','pinning'];
  provisioner_dataelement1 = new MatTableDataSource<provisioner_PeriodicElement1>(CLIENT_ELEMENT_DATA1);
  applyFilter(filterValue: string) {
    this.provisioner_dataelement1.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.provisioner_dataelement1.paginator = this.paginator;
  }

}
export interface provisioner_PeriodicElement1 {
settingsname: string;
devicemodel: string;
}

const CLIENT_ELEMENT_DATA1: provisioner_PeriodicElement1[] = [
  {settingsname: 'DP750',devicemodel: 'Grandstream DP750'},
  {settingsname: 'Fanvil X4',devicemodel: 'Fanvil X4'},
  {settingsname: 'HT702',devicemodel: 'Grandstream HT702'},
  { settingsname: 'HT802',devicemodel: 'Grandstream HT802'},
  {settingsname: 'Vivant-2130',devicemodel: 'Grandstream GXP2130'},
  {settingsname: 'DP750',devicemodel: 'Grandstream DP750'},
  {settingsname: 'Fanvil X4',devicemodel: 'Fanvil X4'},
  {settingsname: 'HT702',devicemodel: 'Grandstream HT702'},
  {settingsname: 'HT802',devicemodel: 'Grandstream HT802'},
  {settingsname: 'Vivant-2130',devicemodel: 'Grandstream GXP2130'},
  {settingsname: 'DP750',devicemodel: 'Grandstream DP750'},
  {settingsname: 'Fanvil X4',devicemodel: 'Fanvil X4'},
  {settingsname: 'HT702',devicemodel: 'Grandstream HT702'},
  { settingsname: 'HT802',devicemodel: 'Grandstream HT802'},
  {settingsname: 'Vivant-2130',devicemodel: 'Grandstream GXP2130'},
  {settingsname: 'DP750',devicemodel: 'Grandstream DP750'},
  {settingsname: 'Fanvil X4',devicemodel: 'Fanvil X4'},
  {settingsname: 'HT702',devicemodel: 'Grandstream HT702'},
  {settingsname: 'HT802',devicemodel: 'Grandstream HT802'},
  {settingsname: 'Vivant-2130',devicemodel: 'Grandstream GXP2130'},
];