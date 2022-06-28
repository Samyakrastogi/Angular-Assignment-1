import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsfetchService {

  public getdetails() : Observable<any>{
    return this.details.get("assets/Details.json");
  }

  constructor(private details : HttpClient){
    this.getdetails().subscribe((details : any) => {

    })
   }
}
