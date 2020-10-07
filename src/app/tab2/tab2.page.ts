import { Component } from '@angular/core';
import { JarvisMemberService } from '../services/jarvis-member.service'
import { JarvisMember } from '../model/JarvisMember';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  jarvisMember: JarvisMember[] = [];

  constructor(private jarvisMemberService : JarvisMemberService,
    private fcm:FCM,
    private router:Router) {}
  
  ngOnInit() {
//    this.members$ = this.jarvisMemberService.getData();
      console.log('page load');
     
      
    this.fcm.getToken().then(token => {
      console.log(token);
    });
  }
}
