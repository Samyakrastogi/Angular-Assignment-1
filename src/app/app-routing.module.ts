import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingPageComponent} from './booking-page/booking-page.component';
import {SigninComponent} from './signin/signin.component';
import {BookedPage1Component} from './booked-page1/booked-page1.component';
import {BookedPage2Component} from './booked-page2/booked-page2.component';
import {BookedPage3Component} from './booked-page3/booked-page3.component';


const routes: Routes = [
  {
    path : "booking-page",
    component : BookingPageComponent
  },
  {
    path : "signin",
    component : SigninComponent
  },
  {
    path : "booking-page/booked-page1",
    component : BookedPage1Component
  },
  {
    path : "booking-page/booked-page2",
    component : BookedPage2Component
  },
  {
    path : "booking-page/booked-page3",
    component : BookedPage3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
