import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  Columns1: string[] = ['name', 'noofextension', 'startofextension', 'createdon','pinning'];
  dataelement1 = new MatTableDataSource<client_PeriodicElement1>(CLIENT_ELEMENT_DATA1);
  applyFilter(filterValue: string) {
    this.dataelement1.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor() { }

  ngOnInit() {
    this.dataelement1.paginator = this.paginator;
  }

}
export interface client_PeriodicElement1 {
  name: string;
  startofextension: number;
  createdon: string;
  time: string;
  noofextension: number;
}

const CLIENT_ELEMENT_DATA1: client_PeriodicElement1[] = [
  {name: 'Zanne Holmes Design', startofextension: 2010, createdon: '2018-10-09',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 1400, createdon: '2018-03-02',time:'16:38:25',noofextension: 2},
  {name: 'Abbey Eatery & Ales', startofextension: 1200, createdon: '2018-10-31',time:'16:38:25',noofextension: 4},
  { name: 'Ability Connections', startofextension: 2200, createdon: '2018-01-25',time:'16:38:25',noofextension: 43},
  {name: 'Zanne Holmes Design', startofextension: 1500, createdon: '2018-10-09',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 2005, createdon: '2018-10-09',time:'16:38:25',noofextension: 2},
  {name: 'Ability Connections', startofextension: 1995, createdon: '2018-01-25',time:'16:38:25',noofextension: 43},
  {name: 'Zanne Holmes Design', startofextension: 1993, createdon: '2018-10-31',time:'16:38:25',noofextension: 9},
  {name: 'Abbey Eatery & Ales', startofextension: 2000, createdon: '2018-10-18',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 1900, createdon: '2018-10-08',time:'16:38:25',noofextension: 2},
{name: 'Zanne Holmes Design', startofextension: 2010, createdon: '2018-10-09',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 1400, createdon: '2018-03-02',time:'16:38:25',noofextension: 2},
  {name: 'Abbey Eatery & Ales', startofextension: 1200, createdon: '2018-10-31',time:'16:38:25',noofextension: 4},
  { name: 'Ability Connections', startofextension: 2200, createdon: '2018-01-25',time:'16:38:25',noofextension: 43},
  {name: 'Zanne Holmes Design', startofextension: 1500, createdon: '2018-10-09',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 2005, createdon: '2018-10-09',time:'16:38:25',noofextension: 2},
  {name: 'Ability Connections', startofextension: 1995, createdon: '2018-01-25',time:'16:38:25',noofextension: 43},
  {name: 'Zanne Holmes Design', startofextension: 1993, createdon: '2018-10-31',time:'16:38:25',noofextension: 9},
  {name: 'Abbey Eatery & Ales', startofextension: 2000, createdon: '2018-10-18',time:'16:38:25',noofextension: 9},
  {name: '1807 Levee LLC', startofextension: 1900, createdon: '2018-10-08',time:'16:38:25',noofextension: 2},
];
