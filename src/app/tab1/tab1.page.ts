import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    console.log('in constructor');
    this.printLocation();
  }

  async printLocation() {
    const location = await this.getCurrentLocation();
    console.log('Current location is: ', location);
  }

  getCurrentLocation(): Promise<any> {
    return new Promise(resolve =>
    navigator.geolocation.getCurrentPosition(success => {
      console.log('geolocation success, ', success);
      resolve(success);
    }));
  }

}
