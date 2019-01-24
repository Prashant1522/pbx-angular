import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-trunk',
  templateUrl: './trunk.component.html',
  styleUrls: ['./trunk.component.css']
})


export class TrunkComponent implements OnInit {
  
  trunkColumns1: string[] = ['trunkname', 'tech', 'callerid', 'status','pinning'];
  trunkdataelement1 = new MatTableDataSource<client_PeriodicElement1>(CLIENT_ELEMENT_DATA1);
  applyFilter(filterValue: string) {
    this.trunkdataelement1.filter = filterValue.trim().toLowerCase();
 }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor() { }

  ngOnInit() {
    this.trunkdataelement1.paginator = this.paginator;
  }

}
export interface client_PeriodicElement1 {
  trunkname: string;
  tech: boolean;
  tech_one: string;
  tech_two: string;
  createdon: string;
  status: boolean;
  callerid: number;
}
const CLIENT_ELEMENT_DATA1: client_PeriodicElement1[] = [
  {trunkname: 'VI-Primary', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-10-09',status:true,callerid: 61462621665,tech:true},
  {trunkname: 'VI-Secondary', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-03-02',status:false,callerid: 61462621666,tech:true},
  {trunkname: 'VI-Tertiary', tech_one:'SIP',tech_two: 'Custom', createdon: '2018-10-31',status:true,callerid: 61462621667,tech:false},
  {trunkname: 'VI-Quanternary', tech_one: 'SIP', tech_two: 'Custom', createdon: '2018-01-25',status:true,callerid: 61462621668,tech:true},
  {trunkname: 'VI-Quinary', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-10-09',status:false,callerid: 61462621669,tech:true},
  {trunkname: 'Twillo Out', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-10-09',status:true,callerid: 61462621670,tech:false},
  {trunkname: 'Loopback', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-01-25',status:false,callerid: 61462621671,tech:false},
  {trunkname: 'VI-Primary', tech_one: 'SIP', tech_two: 'Custom',createdon: '2018-10-09',status:true,callerid: 61462621672,tech:true},
  {trunkname: 'VI-Secondary', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-03-02',status:true,callerid: 61462621673,tech:true},
  {trunkname: 'VI-Tertiary', tech_one:'SIP', tech_two: 'Custom',createdon: '2018-10-31',status:false,callerid: 61462621674,tech:true},
  {trunkname: 'VI-Quanternary', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-01-25',status:true,callerid: 61462621675,tech:true},
  {trunkname: 'VI-Quinary', tech_one: 'SIP', tech_two: 'Custom',createdon: '2018-10-09',status:false,callerid: 61462621676,tech:true},
  {trunkname: 'Twillo Out', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-10-09',status:true,callerid: 61462621677,tech:true},
  {trunkname: 'Loopback', tech_one: 'SIP',tech_two: 'Custom', createdon: '2018-01-25',status:true,callerid: 61462621678,tech:true},
];

