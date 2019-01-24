import {Component, OnInit, ViewChild ,AfterContentInit, Directive, Renderer2, SecurityContext} from '@angular/core';
import { FeatherIconsPipe } from '../../feather-pipe';
import {  DomSanitizer } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { ElementdataService } from '../../elementdata.service';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  firstClick() {
    this.data.firstClick();
  }
  diskusage1 = 32;
  cpuusage= 22;
  diskusage2 = 3;
  clients=23;
  extensions=32;
  DIDs=22;
  activecalls=2;
  Columns1: string[] = ['name', 'noofextension', 'startofextension', 'createdon','pinning'];
  dataelement1 = new MatTableDataSource<PeriodicElement15>(ELEMENT_DATA15);
  Columns2:string[] = ['item', 'value'];
  dataelement2 =  new MatTableDataSource<Prelement>(ELEMENT_DATA16);
  Columns3:string[] = ['item', 'total'];
  dataelement3 =  new MatTableDataSource<requiredelements3>(ELEMENT_DATA17);

  typesOfsources: string[] = ['Opportunity Sources', 'Internet', 'Website', 'Cold Call'];
  typesOfsource: string[] = ['Lead Source', 'Internet', 'Website', 'Cold Call'];
  myDataArray =  new MatTableDataSource<PerElement>(MYPROJECTS_DATA);
  displayedcolumns:string[] = ['projectname', 'client'];
  myDataArraya= new MatTableDataSource<PrElementss>(PIN_DATA);
  displayedcolumnss:string[] = ['projectname', 'client','pinning'];
  DataArray =  new MatTableDataSource<PrElement>(MYTASKS_DATA);
  displaycolumns:string[] = ['taskname', 'client'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'weight', 'symbol','position'];
  Dataarray1 = new MatTableDataSource<PeriodicElement1>(AGREEMENTS_DATA);
  discolumns1: string[] = ['clientname', 'type', 'status'];
  Dataarray2 = new MatTableDataSource<PeriodicElement2>(RECENTLY_DATA);
  discolumns2: string[] = ['clientname', 'type', 'status'];
  Dataarray3 = new MatTableDataSource<PeriodicElement3>(RECEN_DATA);
  discolumns3: string[] = ['Estimate', 'ClientLeadName', 'status'];
  Dataarray4 = new MatTableDataSource<PeriodicElement4>(PROPOSAL_DATA);
  discolumns4: string[] = ['proposalno', 'ClientLeadName', 'status'];
  Dataarray5 = new MatTableDataSource<PeriodicElement5>(APPROVAL_DATA);
  discolumns5: string[] = ['proposalno', 'ClientLeadName', 'status'];
  Dataarray6 = new MatTableDataSource<PeriodicElement6>(BILLS_DATA);
  discolumns6: string[] = ['VendorName', 'PurchaseOrder', 'Amount'];
  Dataarray7 = new MatTableDataSource<PeriodicElement7>(CREDIT_DATA);
  discolumns7: string[] = ['clientname', 'creditcard', 'expirydate'];
  discolumns8: string[] = ['taskname', 'clientLead', 'relatedto','Participants','pinning'];
  Dataarray8 = new MatTableDataSource<PeriodicElement8>(OVERDUE_DATA);
  displayedColumns10: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource10 = new MatTableDataSource(ELEMENTSS_DATA);
 
  ngOnInit() {
    this.dataelement1.paginator = this.paginator;
  }
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataelement1.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.Dataarray8.filter = filterValue.trim().toLowerCase();
  }
htmlToAdd;
constructor(
  private data: ElementdataService,
private _renderer2: Renderer2,
private sanitizer: DomSanitizer) { }
ngAfterViewInit() {}
  
    ngAfterContentInit(){
      
   
    }
   
  

    // Doughnut
  public doughnutChartLabels:string[] = ['Cost of goods sold', 'sales'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';
  public donutColors=[
    {
    backgroundColor: [
    '#6356ae',
    '#27c24c',
    ]
    }
    ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  //barchart

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    // bezierCurve:true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '# of Payments', type: 'line', backgroundColor: "rgba(51,51,51,0.5)", fill: false, lineTension: 0.3 },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Payment Amount ($)' },
  ];
  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#eb942d',
      borderColor: '#eb942d',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#1e90ff',
      borderColor: '#1e90ff',
      pointBackgroundColor: '#1e90ff',
      pointBorderColor: '#1e90ff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  // events


  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


  //incomeExpense

  public incomeExpenseOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    // bezierCurve:true
  };
  public incomeExpenseLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public incomeExpenseType: string = 'bar';
  public incomeExpenseLegend: boolean = true;

  public incomeExpenseData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' }
  ];
  public incomeExpenseColors:Array<any> = [
    { // grey
      backgroundColor: '#27c24c',
      borderColor: '#27c24c',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
   
  ];

  //prevIncome

  public prevIncomeOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    // bezierCurve:true
  };
  public prevIncomeLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public prevIncomeType: string = 'bar';
  public prevIncomeLegend: boolean = true;

  public prevIncomeData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' }
  ];
  public prevIncomeColors:Array<any> = [
    { // grey
      backgroundColor: '#f44242',
      borderColor: '#f44242',
      pointBackgroundColor: '#eb942d',
      pointBorderColor: '#eb942d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
   
  ];

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',lineTension: 0 },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',lineTension: 0 },
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(98,86,172,0.2)',
      borderColor: '#6256ac',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: '#6256ac',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
    
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomizeLine(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com', position: '(180) 123-4567', email: 'kartik@techspawn.com' },
  { name: '54th Street - New Braunfels', weight: 'kasdasd', symbol: 'www.website.com', position: '(180) 123-4567', email: 'kartik@techspawn.com' },

];
export interface PerElement {
  projectname: string;
  client: string;
  matvalue: number;
  projectdate: string;
  overdue: boolean;
}

const MYPROJECTS_DATA: PerElement[] = [
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'Atach Create kela me', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: true },
  { projectname: 'jadshjkas', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'kishor test 102', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
  { projectname: 'test oppo', matvalue: 100, projectdate: '18-01-2017', client: 'Gaurav', overdue: false },
];
export interface PrElement {
  
  client: string;
  matvalues: number;
  projectdate: string;
  overdues: boolean;
}

const MYTASKS_DATA: PrElement[] = [
  { matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  {  matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: false },
  {  matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  {  matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav ', overdues: true },
  {  matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  { matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: true },
  {  matvalues: 100, projectdate: '18-01-2017', client: 'Gaurav', overdues: false },
  ];
export interface Prelement {
  item: string;
  value: string;
 }

const ELEMENT_DATA16: Prelement[] = [
  {item: 'Fusion PBX', value: '4.4.3'},
  {item: 'Switch', value: '1.8.3(64bit)'},
  {item: 'Switch Uptime', value: '3h : 4m : 5s'},
  {item: 'OS Uptime ', value: '3h : 4m : 16s'},
  {item: 'Disk Usage',value: '32%'},
  {item: 'CPU Usage', value: '1.5%'},
  {item: 'DB Connections',value: '6'},
  {item: 'Channels',value: '0'},
  {item: 'Registrations', value: '2'}
];
export interface requiredelements3 {
  item: string;
  total: number;
 }

const ELEMENT_DATA17: requiredelements3[] = [
  {item: 'Domains', total: 3},
  {item: 'Extensions', total: 9},
  {item: 'Gateways', total:0 },
  {item: 'Users', total:2},
  {item: 'Destinations',total:1},
  { item: 'IVR Menus', total:1},
  {item: 'Ring Groups',total: 1},
  {item: 'Voicemail', total: 9}
];
export interface PeriodicElement1 {
  clientname: string;
  type: string;
  date: string;
  status: boolean;
}

const AGREEMENTS_DATA: PeriodicElement1[] = [
  {clientname: 'Atach Create kela me' , date:'18-01-2017', type: 'Internet Service Agreement' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Internet Service Agreement' ,status:true},
  {clientname: 'PBX Test 2',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)',date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  
];
export interface  PeriodicElement2 {
  clientname: string;
  type: string;
  date: string;
  status:boolean; 
}

const RECENTLY_DATA: PeriodicElement2[] = [
  {clientname: 'Atach Create kela me' , date:'18-01-2017', type: 'Internet Service Agreement' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Internet Service Agreement' ,status:true},
  {clientname: 'PBX Test 2',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)',date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'test 54th', date:'18-01-2017',type: 'Gaurav ',status:true},
  {clientname: 'Atach Create kela me' ,date:'18-01-2017', type: 'Gaurav',status:true},
  {clientname: 'Test mail',date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task issue', date:'18-01-2017',type: 'Gaurav',status:true},
  {clientname: 'task2 mileston 2' , date:'18-01-2017', type: 'Gaurav' ,status:true} , 
  {clientname: 'new task (pbx)', date:'18-01-2017',type: 'Gaurav' ,status:true},
  {clientname: 'PBX Test 2', date:'18-01-2017',type: 'Gaurav',status:true},
  
];
export interface  PrElementss {
  projectname: string;
  client: string;
  matvalue: number;
  projectdate: string;
  overdue:boolean; 
}

const PIN_DATA: PrElementss[] = [
  {projectname: 'Atach Create kela me' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'test 54th', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav ',overdue:true},
  {projectname: 'Atach Create kela me' ,matvalue: 100,projectdate:'18-01-2017', client: 'Gaurav',overdue:true},
  {projectname: 'Test mail', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task issue', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task2 mileston 2' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'test 54th', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav ',overdue:true},
  {projectname: 'Atach Create kela me' ,matvalue: 100,projectdate:'18-01-2017', client: 'Gaurav',overdue:true},
  {projectname: 'Test mail', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task issue', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  {projectname: 'task2 mileston 2' ,matvalue: 100, projectdate:'18-01-2017', client: 'Gaurav' ,overdue:true} , 
  {projectname: 'new task (pbx)', matvalue: 100, projectdate:'18-01-2017',client: 'Gaurav' ,overdue:false},
  {projectname: 'PBX Test 2', matvalue: 100,projectdate:'18-01-2017',client: 'Gaurav',overdue:true},
  
];
export interface  PeriodicElement3 {
  Estimate: string;
  ClientLeadName: string;
  date: string;
  status:boolean; 
}

const RECEN_DATA: PeriodicElement3[] = [
  {Estimate: 'EST0039' , date:'18-01-2017', ClientLeadName: 'Internet Service Agreement' ,status:true} , 
  {Estimate: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Internet Service Agreement' ,status:true},
  {Estimate: 'PBX Test 2',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav ',status:true},
  {Estimate: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav' ,status:true} , 
  {Estimate: 'new task (pbx)',date:'18-01-2017',ClientLeadName: 'Gaurav' ,status:true},
  {Estimate: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav ',status:true},
  {Estimate: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {Estimate: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav' ,status:true} , 
  {Estimate: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Gaurav' ,status:true},
  {Estimate: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  
];
export interface  PeriodicElement4 {
  proposalno: string;
  ClientLeadName: string;
  date: string;
  status:boolean; 
}
const PROPOSAL_DATA: PeriodicElement4[] = [
  {proposalno: 'EST0039' , date:'18-01-2017', ClientLeadName: 'Internet Service Agreement' ,status:true} , 
  {proposalno: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Internet Service Agreement' ,status:true},
  {proposalno: 'PBX Test 2',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav ',status:true},
  {proposalno: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav' ,status:true} , 
  {proposalno: 'new task (pbx)',date:'18-01-2017',ClientLeadName: 'Gaurav' ,status:true},
  {proposalno: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav ',status:true},
  {proposalno: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  {proposalno: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav' ,status:true} , 
  {proposalno: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Gaurav' ,status:true},
  {proposalno: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav',status:true},
  
];
export interface  PeriodicElement5 {
    proposalno: string;
    ClientLeadName: string;
    date: string;
   
  }
  const APPROVAL_DATA: PeriodicElement5[] = [
    {proposalno: 'EST0039' , date:'18-01-2017', ClientLeadName: 'Internet Service Agreement' } , 
    {proposalno: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Internet Service Agreement' },
    {proposalno: 'PBX Test 2',date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName:'Gaurav'},
    {proposalno: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav'} , 
    {proposalno: 'new task (pbx)',date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'test 54th', date:'18-01-2017',ClientLeadName: 'Gaurav '},
    {proposalno: 'Atach Create kela me' ,date:'18-01-2017', ClientLeadName: 'Gaurav'},
    {proposalno: 'Test mail',date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'task issue', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'task2 mileston 2' , date:'18-01-2017', ClientLeadName: 'Gaurav'} , 
    {proposalno: 'new task (pbx)', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    {proposalno: 'PBX Test 2', date:'18-01-2017',ClientLeadName: 'Gaurav'},
    
  ];
export interface  PeriodicElement6 {
    VendorName: string;
    PurchaseOrder: string;
    date: string;
    Amount:string;
  }
  const BILLS_DATA: PeriodicElement6[] = [
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    {VendorName: 'EST0039' , date:'18-01-2017', PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'} , 
    {VendorName: 'new task (pbx)', date:'18-01-2017',PurchaseOrder: 'Internet Service Agreement' ,Amount:'$56.13'},
    
  ];
  export interface  PeriodicElement7{
    clientname: string;
    creditcard: string;
    expirydate: string;
    
  }
  const CREDIT_DATA: PeriodicElement7[] = [
    {clientname: 'EST0039' , expirydate:'18-01-2017', creditcard: 'Internet Service Agreement'} , 
    {clientname: 'new task (pbx)', expirydate:'18-01-2017',creditcard: 'Internet Service Agreement'},
    {clientname: 'EST0039' , expirydate:'18-01-2017', creditcard: 'Internet Service Agreement'} , 
    {clientname: 'new task (pbx)', expirydate:'18-01-2017',creditcard: 'Internet Service Agreement'},
    {clientname: 'EST0039' , expirydate:'18-01-2017', creditcard: 'Internet Service Agreement'}  
  ];
  export interface  PeriodicElement8{
    taskname: string;
    clientLead:string;
    creditcard: string;
    expirydate: string;
    matvalue:number;
    overdue: boolean;
    }
  const OVERDUE_DATA: PeriodicElement8[] = [
    {taskname: 'EST0039' ,clientLead:'company name',matvalue:100, expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} , 
    {taskname: 'new task (pbx)', clientLead:'Test', matvalue:100,expirydate:'18-01-2017',creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' , clientLead:'Test', matvalue:100,expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} , 
    {taskname: 'new task (pbx)', clientLead:'Test',matvalue:100,expirydate:'18-01-2017',creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' ,  clientLead:'Test',matvalue:100,expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} ,
    {taskname: 'EST0039' ,clientLead:'company name',matvalue:100, expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} , 
    {taskname: 'new task (pbx)', clientLead:'Test',matvalue:100, expirydate:'18-01-2017',creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' , clientLead:'Test',matvalue:100, expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} , 
    {taskname: 'new task (pbx)', clientLead:'Test',matvalue:100,expirydate:'18-01-2017',creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' ,  clientLead:'Test',matvalue:100,expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' , clientLead:'Test',matvalue:100, expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true} , 
    {taskname: 'new task (pbx)', clientLead:'Test',matvalue:100,expirydate:'18-01-2017',creditcard: 'Internet Service Agreement',overdue:true},
    {taskname: 'EST0039' ,  clientLead:'Test',matvalue:100,expirydate:'18-01-2017', creditcard: 'Internet Service Agreement',overdue:true}    
  ];
  export interface PeriodicElement10 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENTSS_DATA: PeriodicElement10[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  export interface PeriodicElement15 {
    name: string;
    startofextension: number;
    createdon: string;
    time: string;
    noofextension: number;
  }
  
  const ELEMENT_DATA15: PeriodicElement15[] = [
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