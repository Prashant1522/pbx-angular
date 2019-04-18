import {Component, OnInit, ViewChild ,AfterContentInit, Directive, Renderer2, SecurityContext, HostListener} from '@angular/core';

import {  DomSanitizer } from '@angular/platform-browser';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { ElementdataService } from '../../elementdata.service';
import { BaseChartDirective } from 'ng2-charts';

import { NguCarouselConfig } from '@ngu/carousel';
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
  public innerWidth: any;
  public nocolsvariable: number;
  public barChartOptions:any = {
    responsive:true,
    maintainAspectRatio: false,
  tooltips: {
      mode: 'index',
       backgroundColor:"#ffffff",
      borderColor:"red",
      bodyFontColor:"black",
      titleFontColor:"black",
     
      
  },
     scales: {
      xAxes: [{
        categoryPercentage:0.5,
      
        barPercentage:1,
          gridLines: {
            drawBorder: false,
            display: false,
            lineWidth: 2,
           },
         ticks: {
          fontColor: "#343434", 
          fontSize: 16,
         },
      }],
      yAxes: [{
        scaleLabel :{
          display: false,
        },
       gridLines: {
        drawBorder: false,
        display: false,
        lineWidth: 2,
        },
        ticks: {
        display: false,
        },
     }],
},
    scaleShowVerticalLines: false,
   
  };
  public barChartLabels:string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Inbound Calls'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Outbound Calls'}
  ];
 
  public barChartColors: Array<any> = [
    { 
      backgroundColor: '#6458ae'
    },
    { // dark grey
      backgroundColor: '#e67d4a',
    },]
 
  
  calls: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  billingday= "28th of every month ";
  paymentmethod ="Credit card";
  accountbalance ="$0.00";
  displayedColumns: string[] = ['photo', 'billdate', 'amount', 'payment']
  dataSource  = new MatTableDataSource<PeriodicElement20>(ELEMENT_DATA20);
  provisionerColumns1: string[] = ['settingsname', 'devicemodel','pinning'];
  
  provisioner_dataelement1 = new MatTableDataSource<provisioner_PeriodicElement1>(PROVISIONER_ELEMENT_DATA1);
  applyFilter4(filterValue: string) {
    this.provisioner_dataelement1.filter = filterValue.trim().toLowerCase();
  }
  applyFilter10(filterValue: string) {
    this.outbound_dataelement1.filter = filterValue.trim().toLowerCase();
  }
 
  trunkColumns1: string[] = ['trunkname', 'tech', 'callerid', 'status','pinning'];
  trunkdataelement1 = new MatTableDataSource<trunk_PeriodicElement1>(TRUNK_ELEMENT_DATA1);
  applyFilter5(filterValue: string) {
    this.trunkdataelement1.filter = filterValue.trim().toLowerCase();
 }
  outboundColumns1: string[] = ['did', 'cid', 'description', 'destination','pinning'];
  outbound_dataelement1 = new MatTableDataSource<outboundPeriodicElement1>(OUTBOUND_ELEMENT_DATA1);
  to_destination = ['value0', 'value1','value2', 'value3'];
  from_destination = ['value0', 'value1','value2', 'value3'];
  musics=['value0', 'value1','value2', 'value3'];
  alerts=['value0', 'value1','value2', 'value3'];
  clientColumns1: string[] = ['name', 'noofextension', 'startofextension', 'createdon','pinning'];
  clientdataelement1 = new MatTableDataSource<client_PeriodicElement1>(CLIENT_ELEMENT_DATA1);
  applyFilter3(filterValue: string) {
    this.clientdataelement1.filter = filterValue.trim().toLowerCase();
 }
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
  
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumnsS: string[] = ['name', 'weight', 'symbol','position'];
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
    
    this.dataelement1.paginator = this.paginator1;
    this.clientdataelement1.paginator = this.paginator2;
    this.trunkdataelement1.paginator = this.paginator3;
    this.provisioner_dataelement1.paginator = this.paginator4;
    this.dataSource.paginator = this.paginator5;
    var myvar = setInterval(() => {

      this.legendData = this.chartComponent.chart.generateLegend();

      // console.log("still running");
      if (this.legendData) {
        // console.log(this.legendData);
        clearInterval(myvar);
      }
    }, 0);

    this.innerWidth = window.innerWidth;
    this.nocolsvariable = (this.innerWidth>920) ? 4 : ((this.innerWidth>480) ? 2 : 1);

  }
  @ViewChild(BaseChartDirective) chartComponent: BaseChartDirective;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.nocolsvariable = (this.innerWidth>920) ? 4 : ((this.innerWidth>480) ? 2 : 1);
 /*  var myvar2 = setInterval(() => {
    const myLegend = document.getElementById('overdue');
    // console.log(myLegend);
     if (myLegend) {
         //console.log(this.legendData);
         var legendItems = myLegend.getElementsByTagName('li');
        // console.log(legendItems);
        for (var i = 0; i < legendItems.length; i += 1) {
         legendItems[i].addEventListener("click", (legendClickCallback) => {
           console.log(event);
           var index;
           switch(event.srcElement.innerHTML){
             case "Series A":
               index=0;
               break;
             case "Series B":
               index=1;
               break;
             case "Series C":
               index=2;
               break;
           }
           
           this.chartComponent.chart.data.datasets[index].hidden = !this.chartComponent.chart.data.datasets[index].hidden;
           this.chartComponent.chart.update();
 
 
         });
         }
         clearInterval(myvar2);
       }
     }, 1000);
  */

  }
  legendData: any;
  totalcalls = 179;
  missedcalls = 0;
  mostactive = 0;
  averagetallktime = '00.00.00';
  totalcalls2 =129;
  averagetallktime2= '00.01.12';
  missedcalls2=6;
  mostactive2=29;
  totalcalls3=0;
  averagetallktime3= '00.01.59';
  mostactive3=6;
  totalcalls4=0;
  averagetallktime4='00.00.00';
  missedcalls4=0;
  mostactive4=0;
  totalcalls5=0;
  averagetallktime5='00.00.00';
  missedcalls5=0;
  mostactive5=0;
  public lineChartData1: Array<any> = [
   
    { data: [0, 50, 69, 35, 22, 0], label: 'Series A', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
    { data: [0, 43, 50, 21, 12, 0], label: 'Series B', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
    { data: [0, 9, 18, 14, 10, 0], label: 'Series C', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
   
   
  ];

  private getLegendCallback = (function (self) {
   
  
  function handle(chart) {
     return chart.legend.legendItems;
   }
    return function (chart) {
      return handle(chart);
    }
  })(this);
  public lineChartLabels: Array<any> = ['6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30'];

  public lineChartOptions: any = {
    
  
    responsive: true,
    maintainAspectRatio: false,
    legendCallback: this.getLegendCallback,
    tooltips: {
      mode: 'index',
      axis: 'x'
  },
   
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'probability'
        },
        pointLabels: {
          fontSize: 18,
          fontColor: "green"
        },
      ticks: {
        
        padding:10,
        fontColor: "#343434", 
        fontSize: 14,
      
  
      
      },
      angleLines: {
        display: false,
        lineWidth: 2,
        color :'#998fd2',
        
        
        },
      gridLines: {
        
      display: false,
      lineWidth: 2,
      color :'#998fd2',
      
      
      }
     
      }],
      yAxes: [{
      scaleLabel: {
          display: true,
          labelString: 'probability'
        },
      ticks: {
      padding:20,
      beginAtZero: true,
      fontColor: "#343434",
      fontSize: 14,
     },
      gridLines: {
      drawTicks:false,
      display: true,
      color: '#efefef',
      lineWidth: 1.5,
      }
      }]
      },
    
    legend: {
      textalign: "right",
      
      labels: {
        usePointStyle: true,
        horizontalAlign: "left" ,
        fontSize: 18,
      }
    }
  };
  
    
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#998fd2',
      pointBackgroundColor: '#998fd2',
      pointBorderColor: '#998fd2',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      
    },
    { // dark grey
      backgroundColor: 'transparent',
      borderColor: '#e69d72',
      pointBackgroundColor: '#e69d72',
      pointBorderColor: '#e69d72',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#a3cb85',
      pointBackgroundColor: '#a3cb85',
      pointBorderColor: '#a3cb85',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#a3cb85'
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#998fd2',
      pointBackgroundColor: '#998fd2',
      pointBorderColor: '#998fd2',
      pointHoverBackgroundColor: '#998fd2',
      pointHoverBorderColor: '#998fd2'
    }
  ];


  public lineChartLegend: any = {
    boolean: true,
    fillStyle: 'red',
  }
  public lineChartType: string = 'line';

  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  @ViewChild('paginator3') paginator3: MatPaginator;
  @ViewChild('paginator4') paginator4: MatPaginator;
  @ViewChild('paginator5') paginator5: MatPaginator;
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
private sanitizer: DomSanitizer) { 
 
}
ngAfterViewInit() {
  var myvar2 = setInterval(() => {
    const myLegend = document.getElementById('overdue');
    // console.log(myLegend);
     if (myLegend) {
         //console.log(this.legendData);
         var legendItems = myLegend.getElementsByTagName('li');
        // console.log(legendItems);
        for (var i = 0; i < legendItems.length; i += 1) {
         legendItems[i].addEventListener("click", (legendClickCallback) => {
           console.log(event);
           var index;
           switch(event.srcElement.innerHTML){
             case "Series A":
               index=0;
               break;
             case "Series B":
               index=1;
               break;
             case "Series C":
               index=2;
               break;
           }
           
           this.chartComponent.chart.data.datasets[index].hidden = !this.chartComponent.chart.data.datasets[index].hidden;
           this.chartComponent.chart.update();
 
 
         });
         }
         clearInterval(myvar2);
       }
     }, 1000);
 
}
  
    ngAfterContentInit(){
      
   
    }
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
  
  //carousel
  
  public carouselTileItems: Array<any> = ["Angular 7", "Angular Material Design",
   "Angular Flex-Layout", "Chart.js/Canvas manipulation",
    "REST API", "Angular dynamic menu",
    "Custom scrollbars","Angular Material Forms"];
  
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    loop:true,
    interval: { timing: 3000 },
    animation: 'lazy',
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

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
    export interface trunk_PeriodicElement1 {
      trunkname: string;
      tech: boolean;
      tech_one: string;
      tech_two: string;
      createdon: string;
      status: boolean;
      callerid: number;
    }
    const TRUNK_ELEMENT_DATA1: trunk_PeriodicElement1[] = [
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
    export interface provisioner_PeriodicElement1 {
      settingsname: string;
      devicemodel: string;
      }
      
      const PROVISIONER_ELEMENT_DATA1: provisioner_PeriodicElement1[] = [
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
      export interface PeriodicElement20 {
        billdate: string;
        amount: string;
        payment: string;
        tobebilled: boolean;
      }
      
      const ELEMENT_DATA20: PeriodicElement20[] = [
        {billdate:'Current Usage',amount:'$1.05',payment: '06 /30 /2018',tobebilled:true},
        {billdate:'June 28, 2018', amount:'$177.54', payment: '($177.54)',tobebilled:false},
        {billdate:'May 28, 2018', amount:'$150.99', payment: '($150.99)',tobebilled:false},
        {billdate:'May 01, 2018', amount:'$64.95', payment: '($64.95)',tobebilled:false},
      ];