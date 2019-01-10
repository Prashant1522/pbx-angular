import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ClientComponent } from './client/client.component';

import { ReportsComponent } from './reports/reports.component';


export const PagesRoutes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'clients',
  component : ClientComponent,
},
{
  path: 'connectivity',
  component : CalendarComponent,
},
{
  path: 'provisioner',
  component : DiscussionComponent,
},
{
  path: 'billing',
  component : MailboxComponent,
},


{
  path: 'reports',
  component : ReportsComponent,
},

];
