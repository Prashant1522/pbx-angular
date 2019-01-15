import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.css']
})
export class OutboundComponent implements OnInit {
  outboundColumns1: string[] = ['did', 'cid', 'description', 'destination','pinning'];
  outbound_dataelement1 = new MatTableDataSource<outboundPeriodicElement1>(OUTBOUND_ELEMENT_DATA1);
  to_destination = ['value0', 'value1','value2', 'value3'];
  from_destination = ['value0', 'value1','value2', 'value3'];
  musics=['value0', 'value1','value2', 'value3'];
  alerts=['value0', 'value1','value2', 'value3'];
  
  applyFilter(filterValue: string) {
    //this.dataelement1.filter = filterValue.trim().toLowerCase();
  }
 
  constructor() { }

  ngOnInit() {
  }

}
export interface outboundPeriodicElement1 {
  did: number;
 cid: string;
 description: string;
  noofextension: number;
  content: string;
  destination:string;
}

const OUTBOUND_ELEMENT_DATA1: outboundPeriodicElement1[] = [
  {did: 2143907281,cid: 'Any',description:'Hunter Kelly',destination:'Extension :',content:'This is demo Inbound Routes description here',noofextension: 9},
  {did: 2146130380,cid: 'Any',description:'Dallas Fax',destination:'Misc Destinations : ',content:'Dallas Fax Temporary Forwarding Number ',noofextension: 2},
  {did: 2146130500,cid: 'Any',description:'Dallas',destination:'Time Conditions : ',content:'This is demo Inbound Routes description here',noofextension: 4},
  { did: 2146183420,cid: 'Any',description:'Frisco Wade',destination:'Time Conditions : ',content:'This is demo Inbound Routes description here',noofextension: 43},
  {did: 2146124555,cid: 'Any',description:'Piano-Pkwy',destination:'Time Conditions : ',content:'This is demo Inbound Routes description here',noofextension: 9},
  ];
