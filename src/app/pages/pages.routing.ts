import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ConnectivityComponent } from './connectivity/connectivity.component';
import { ProvisionerComponent } from './provisioner/provisioner.component';
import { BillingComponent } from './billing/billing.component';
import { ClientsComponent } from './clients/clients.component';

import { ReportsComponent } from './reports/reports.component';
import { OutboundComponent } from './connectivity/outbound/outbound.component';
import { TrunkComponent } from './connectivity/trunk/trunk.component';


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
  component : OutboundComponent,
},
{
  path: 'connectivity-trunk',
  component : TrunkComponent,
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
