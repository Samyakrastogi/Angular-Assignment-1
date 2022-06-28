import { Component, OnInit } from '@angular/core';
import {DetailsfetchService}  from '../detailsfetch.service'


@Component({
  selector: 'app-booked-page2',
  templateUrl: './booked-page2.component.html',
  styleUrls: ['./booked-page2.component.css']
})
export class BookedPage2Component implements OnInit {
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

