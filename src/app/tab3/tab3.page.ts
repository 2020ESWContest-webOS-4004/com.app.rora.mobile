import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { JarvisMemberService } from '../services/jarvis-member.service'
import { TheftAccident } from '../services/jarvis-member.service'

import * as _ from 'lodash';

const endpoint = "http://13.125.168.30:3333/";

let items = [
	{ id: 1, name: 'first'},
	{ id: 2, name: 'second'},
	{ id: 3, name: 'third'},
	{ id: 4, name: 'fourth'}
];

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  theftAccidents;
  trafficAccidents;
  constructor(
    private http: HttpClient,
    private jarvisMemberService : JarvisMemberService
    ) {}

    ngOnInit() {
      this.jarvisMemberService
        .getTheftAccidentList()
        .subscribe(
          any => {
            this.theftAccidents=any
            console.log(this.theftAccidents);
          }
        )
      this.jarvisMemberService
        .getTrafficAccidentList()
        .subscribe(
            any => {
              this.trafficAccidents=any
              console.log(this.trafficAccidents);
            
          }
        )

  }

}
