import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MedicDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-medic-detail",
  templateUrl: "medic-detail.html"
})
export class MedicDetailPage {
  medic: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medic = this.navParams.get("medic");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MedicDetailPage");
  }
}
