import { Component, OnInit } from '@angular/core';
import {DetailsfetchService}  from '../detailsfetch.service'


@Component({
  selector: 'app-booked-page3',
  templateUrl: './booked-page3.component.html',
  styleUrls: ['./booked-page3.component.css']
})
export class BookedPage3Component implements OnInit {
  public flightdetails =[{

    SNo : "",
    Name : "",
    From : "",
    To : "",
    Logo : "",
    DepartureTime : "",
    ArrivalTime : "",
    Duration : "",
    Price : "",
    EMI : ""


}]


constructor(private element : DetailsfetchService) { }

ngOnInit() {
  this.element.getdetails().subscribe(res =>{
    this.flightdetails = res
})
}
}
