import { Component, OnInit } from '@angular/core';
import {DetailsfetchService}  from '../detailsfetch.service'

@Component({
  selector: 'app-booked-page1',
  templateUrl: './booked-page1.component.html',
  styleUrls: ['./booked-page1.component.css']
})
export class BookedPage1Component implements OnInit {
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
