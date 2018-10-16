import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the RegisterSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register-selector",
  templateUrl: "register-selector.html"
})
export class RegisterSelectorPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterSelectorPage");
  }

  open(page, type) {
    this.navCtrl.setRoot(page, { type: type }, { animate: false });
  }
}
