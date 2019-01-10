import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  matvalue = 0;
  
  displayedColumns: string[] = ['billing', 'information'];
  client_Columns1 = new MatTableDataSource<client_PeriodicElement1>(CLIENT_ELEMENT_DATA1);

  
  constructor() { }

  ngOnInit() {
   
  }

}

export interface client_PeriodicElement1 {
  billing: string ;
  information: string;
}

const CLIENT_ELEMENT_DATA1: client_PeriodicElement1[] = [
  {billing: 'Billing Day', information: '0'},
  {billing: 'Payment Method', information: '100'},
  {billing: 'Current Account Balance' ,  information: '0'}
  
];