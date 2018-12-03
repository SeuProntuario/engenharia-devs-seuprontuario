import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EnchiridionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-enchiridion-detail",
  templateUrl: "enchiridion-detail.html"
})
export class EnchiridionDetailPage {
  ench: any;
  drugs = [
    {
      name: "Comprimidim 20mg"
    },
    {
      name: "Remedinol 30mg"
    },
    {
      name: "Saradoentim 50mg"
    },
    {
      name: "Paradoentol 25mg"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ench = navParams.get("ench");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnchiridionDetailPage");
  }
}
