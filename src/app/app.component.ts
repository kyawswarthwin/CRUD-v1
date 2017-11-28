import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import Parse from 'parse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'TodosPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    Parse.initialize('uaNpSvLm4WbacM9ArUj9PO5hdUXDfYIyfR00AksI', 'lC4JHEfPC1bAXdJ74xie2WAryqeMoQrISDTPesy9');
    Parse.serverURL = 'https://parseapi.back4app.com/'

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

