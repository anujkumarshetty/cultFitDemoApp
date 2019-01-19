import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
    { type: "Accounts", icon: "ios-cog-outline" },
    { type: "Orders", icon: "ios-cart-outline" },
    { type: "My Challenges", icon: "ios-bicycle-outline" },
    { type: "Active packs / Subscriptions", icon: "ios-albums-outline" },
    { type: "Medical Records", icon: "ios-heart-outline" },
    { type: "Fitness Devices", icon: "ios-watch-outline" },
    { type: "Support", icon: "ios-headset-outline" },
    { type: "App Update", icon: "md-checkmark" }]
    ;

  constructor(public navCtrl: NavController) {
    let items: string[] = ["Accounts", "Orders", "My Chanllenges", "Active packs / Subscriptions", "Medical Records", "Fitness Devices", "Support", "App Update"];
  }



}
