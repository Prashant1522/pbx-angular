import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { BillingComponent } from './billing/billing.component';
import { ProvisionerComponent } from './provisioner/provisioner.component';


import { ReportsComponent } from './reports/reports.component';

import { ClientsComponent } from './clients/clients.component';


import { SharedModule } from '../shared/shared.module';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Cards3Component } from './dashboard/dashboardComps/cards3/cards3.component';
import { OutboundComponent } from './connectivity/outbound/outbound.component';
import { TrunkComponent } from './connectivity/trunk/trunk.component';
// import { DashboardDirective } from './dashboard.directive';
// import { HighlightDirective } from './dashboard/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule,
    FormsModule,
    // AppModule
    NgCircleProgressModule.forRoot({
      // set defaults here 
     
      radius: 60,
      space: -10,
      outerStrokeWidth: 10,
      outerStrokeColor: "#30c454",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      title: "5%",
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false
    }),
    ChartsModule,
    NgScrollbarModule
  
  ],
   exports:[
    DashboardComponent
  ], 
  declarations: [PagesComponent,
     DashboardComponent,
      ConnectivityComponent,
       BillingComponent,
        ProvisionerComponent,
        
        ReportsComponent,
       
         
         ClientsComponent ,
      
         Cards3Component,
      
         OutboundComponent,
      
         TrunkComponent, 
        
    ],
    providers: [],
 
})
export class PagesModule {}
