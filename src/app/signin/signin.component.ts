import { Component, OnInit } from '@angular/core';
// import { format } from 'path';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showing=true
 submit(){
  // S
  this.showing=false
 }

}
