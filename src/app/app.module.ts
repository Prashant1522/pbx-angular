import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { NgSelectModule } from '@ng-select/ng-select';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatPaginatorIntl } from '@angular/material';

// import { OutboundComponent } from './app/pages/connectivity/outbound/outbound.component';
// import { Cards3Component } from './src/app/pages/dashboard/dashboardComps/cards3/cards3.component';

// import { HighlightDirective } from './highlight.directive';

import { MatButtonModule } from '@angular/material/button';

import { MatKeyboardModule } from '@ngx-material-keyboard/core';
// import { CallButtonComponent } from './pages/call-button.component'

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    // CallButtonComponent,
    // OutboundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgScrollbarModule,
    NgSelectModule, 
    NgCircleProgressModule.forRoot({
     
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
     
    }),
    // Angular modules
   

    // Material modules
   
  ],
  
  
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
       
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
