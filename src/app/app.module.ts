import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
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
import { CallButtonComponent } from './pages/call-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatKeyboardModule, MAT_KEYBOARD_LAYOUTS, IKeyboardLayouts, keyboardLayouts } from '@ngx-material-keyboard/core';

// import { MatPaginatorIntlCro } from './../customClass';
const customLayouts: IKeyboardLayouts = keyboardLayouts;
customLayouts.numpad = {
  'name': 'Numpad', 'keys': [
    [['1', '1'], ['2', '2'], ['3', '3']],
    [['4', '4'], ['5', '5'], ['6', '6']],
    [['7', '7'], ['8', '8'], ['9', '9']],
    [['Bksp', 'Bksp'], ['0', '0'], ['Enter', 'Enter']]
  ]
};
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    CallButtonComponent,
    // OutboundComponent,
    CallButtonComponent, 
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
     BrowserModule,
     BrowserAnimationsModule,
     FormsModule,
 
     // Material modules
     MatButtonModule,
     MatKeyboardModule,
   
  ],
  
  
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
       
    },
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
