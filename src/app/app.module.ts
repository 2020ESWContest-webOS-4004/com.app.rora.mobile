import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule} from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { SMS } from '@ionic-native/sms/ngx';




@NgModule({
  declarations: [AppComponent], 
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AuthModule, HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FCM,
    SMS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
