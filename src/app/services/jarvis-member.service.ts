import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class TheftAccident {
  accident_id: number;
  jarvis_member_id:string;
  car_number:string;
  accident_location:string;
  accident_time:string;
}

const endpoint = "http://13.125.168.30:3333/";


@Injectable({
  providedIn: 'root'
})
export class JarvisMemberService {

  constructor(private http: HttpClient) {}

  getTheftAccidentList() :Observable<any>{
    return this.http.get(endpoint + 'theftaccident', {responseType:'json'})
  }
  getTrafficAccidentList() : Observable<any> {
    return this.http.get(endpoint + 'trafficaccident', {responseType:'json'})
  }
}
