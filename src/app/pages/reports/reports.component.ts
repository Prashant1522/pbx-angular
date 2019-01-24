import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  calls: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  @ViewChild(BaseChartDirective) chartComponent: BaseChartDirective;
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
    { data: [0, 50, 68, 35, 22, 0], label: 'Series A', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
    { data: [0, 43, 50, 21, 12, 0], label: 'Series B', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 3},
    { data: [0, 9, 18, 14, 10, 0], label: 'Series C', lineTension: 0, borderWidth: 1, pointBorderWidth: 1, pointRadius: 4},
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
    
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          lineWidth: 2,
          color :'#998fd2'
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: '#efefef',
          lineWidth: 1.5
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
      pointBackgroundColor: '#998fd2',
      pointBorderColor: '#998fd2',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
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
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#a3cb85'
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
        console.log(this.legendData);
        var legendItems = myLegend.getElementsByTagName('li');
        console.log(legendItems);
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
            
            this.chartComponent.chart.config.data.datasets[index].hidden = !this.chartComponent.chart.config.data.datasets[index].hidden;
            this.chartComponent.chart.update();


          });
        }
        clearInterval(myvar2);
      }
    }, 1000);

  }
 
 
}



