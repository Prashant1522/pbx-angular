import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { ProvisionerComponent } from './provisioner/provisioner.component';
import { BillingComponent } from './billing/billing.component';
import { ClientsComponent } from './clients/clients.component';

import { ReportsComponent } from './reports/reports.component';


export const PagesRoutes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'clients',
  component : ClientsComponent,
},
{
  path: 'connectivity',
  component : ConnectivityComponent,
},
{
  path: 'provisioner',
  component : ProvisionerComponent,
},
{
  path: 'billing',
  component : BillingComponent,
},


{
  path: 'reports',
  component : ReportsComponent,
},

];
