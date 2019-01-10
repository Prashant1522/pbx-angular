import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billingday= "28th of every month ";
  paymentmethod ="Credit card";
  accountbalance ="$0.00";
  displayedColumns: string[] = ['photo', 'billdate', 'amount', 'payment']
  dataSource  = new MatTableDataSource<PeriodicElement15>(ELEMENT_DATA15);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement15 {
  
  billdate: string;
  amount: string;
  payment: string;
}

const ELEMENT_DATA15: PeriodicElement15[] = [
  {billdate:'Current Usage',amount:'$1.05', payment: 'To be billed: 06 /30 /2018'},
  {billdate:'June 28, 2018', amount:'$177.54', payment: '($177.54)'},
  {billdate:'May 28, 2018', amount:'$150.99', payment: '($150.99)'},
  {billdate:'May 01, 2018', amount:'$64.95', payment: '($64.95)'},
];