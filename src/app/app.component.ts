import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sms : SMS,
    private fcm : FCM,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
      
    this.fcm.getToken().then(token => {
      console.log(token);
    });

    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped) {
        console.log('Received in background');
        this.sms_send('sms');
        this.router.navigate([data.landing_page]);      
      } else {
      console.log(data);
        console.log('Received in foreground');
        this.sms_send('sms');
        this.router.navigate([data.landing_page]);      
      }
    });
    });
  }
  
  sms_send(data) {
    let message = "차량 사고 발생";
    let call_Num = "01072898979";
    console.log('sms send');
    this.sms.send(call_Num, message);
   }
}
