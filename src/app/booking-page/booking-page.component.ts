import { Component, OnInit } from '@angular/core';
import {DetailsfetchService}  from '../detailsfetch.service'

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
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

  constructor(private element : DetailsfetchService) {}



  ngOnInit() {
    this.element.getdetails().subscribe(res =>{
      this.flightdetails = res
    })
  }

 showing=true
 submit(){
  // this.showing=false
 }

// Applying Sorting Functionality
toggle1 = false;
toggle2 = false;
toggle3 = false;
toggle4 = false;
condition = 'Enable';

issorted = true;

Departuresorting(){
  if(this.toggle1 == false){
    this.flightdetails.sort((a, b) => a.DepartureTime.localeCompare(b.DepartureTime));
    console.log(this.flightdetails)

    this.toggle1 = true;
  }
  else{
    this.element.getdetails().subscribe(res => {
      this.flightdetails = res
      this.toggle1 = false;
    })
  }
}


Durationsorting(){
  if(this.toggle2 == false){
    this.flightdetails.sort((a, b) => a.Duration.localeCompare(b.Duration));
    console.log(this.flightdetails)

    this.toggle2 = true;
  }
  else{
    this.element.getdetails().subscribe(res => {
      this.flightdetails = res
      this.toggle2 = false;
    })
  }
}

Arrivalsorting(){
  if(this.toggle3 == false){
    this.flightdetails.sort((a, b) => a.ArrivalTime.localeCompare(b.ArrivalTime));
    console.log(this.flightdetails)

    this.toggle3 = true;
  }
  else{
    this.element.getdetails().subscribe(res => {
      this.flightdetails = res
      this.toggle3 = false;
    })
  }
}

Pricesorting(){
  if(this.toggle4 == false){
    this.flightdetails.sort((a, b) => a.Price.localeCompare(b.Price));
    console.log(this.flightdetails)

    this.toggle4 = true;
  }
  else{
    this.element.getdetails().subscribe(res => {
      this.flightdetails = res
      this.toggle4 = false;
    })
  }
}

}
