import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { BookedPage1Component } from './booked-page1/booked-page1.component';
import { BookedPage2Component } from './booked-page2/booked-page2.component';
import { BookedPage3Component } from './booked-page3/booked-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingPageComponent,
    SigninComponent,
    BookedPage1Component,
    BookedPage2Component,
    BookedPage3Component,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
