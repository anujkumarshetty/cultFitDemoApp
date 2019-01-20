import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.http.get('./assets/config/shop.json')
      .subscribe((data) => {
        console.log(data);
        this.items = data;
      });
  }

}
