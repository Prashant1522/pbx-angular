import { Component, OnInit, ViewChild,AfterContentInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chartComponent: BaseChartDirective;
  legendData: any;
  totalcalls = 179;
  public lineChartData1: Array<any> = [
    { data: [0, 50, 68, 35, 22, 0,36,52], label: 'Series A', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
    { data: [0, 28, 48, 40, 19, 86, 0, 90], label: 'Series B', lineTension: 0 },
    { data: [0, 18, 48, 77, 9, 100, 27, 40], label: 'Series C', lineTension: 0 }
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
    legendCallback: this.getLegendCallback,
    title: {
      display: true,
      text: 'Chart.js - Gridline Background',
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          lineWidth: 1
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
          color: 'rgba(171,171,171,1)',
          lineWidth: 0.5
        }
      }]
    },
    legend: {
      textalign: "right",

      labels: {
        usePointStyle: true,

        fontSize: 18,
      }
    }
  };
  
    
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#998fd2',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#998fd2',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


  public lineChartLegend: any = {
    boolean: true,
    fillStyle: 'red',
  }
  public lineChartType: string = 'line';

  applyFilter(filterValue: string) {
    //this.dataelement1.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
    var myvar = setInterval(() => {

      this.legendData = this.chartComponent.chart.generateLegend();

      // console.log("still running");
      if (this.legendData) {
        // console.log(this.legendData);
        clearInterval(myvar);
      }
    }, 0);


  }
  ngAfterViewInit() {
    var myvar2 = setInterval(() => {
      const myLegend = document.getElementById('overdue');
      console.log(myLegend);
      if (myLegend) {
       //  console.log(this.legendData);
         var abc = document.getElementsByTagName('li');
        // console.log(abc);
        var legendItems = myLegend.getElementsByTagName('li');
        //console.log(myLegend);
   // console.log(legendItems);
    for (var i = 0; i < legendItems.length; i += 1) {
      legendItems[i].addEventListener("click", legendClickCallback, false);
    }
    
        clearInterval(myvar2);
      }
    }, 1000);
    
 
  function legendClickCallback(event) {
    event = event || window.event;

    var target = event.target || event.srcElement;
    
    while (target.nodeName !== 'LI') {
       target = target.parentElement;
       //console.log(target);
     
    }
    var parent = target.parentElement;
    var chart = this.chartComponent.chart.instances[0];
    var index = Array.prototype.slice.call(parent.children).indexOf(target);
   // console.log(chart.legend.legendItems[index]);
  
  }
 
 
}

}

