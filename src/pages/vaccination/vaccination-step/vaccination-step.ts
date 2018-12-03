import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the VaccinationStepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-vaccination-step",
  templateUrl: "vaccination-step.html"
})
export class VaccinationStepPage {
  step = "";
  periods = [
    {
      name: "Ao nascer",
      value: "100"
    },
    {
      name: "2 meses",
      value: "63"
    },
    {
      name: "3 meses",
      value: "70"
    },
    {
      name: "4 meses",
      value: "97"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.step = this.navParams.get("name");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VaccinationStepPage");
  }

  openList(period) {
    this.navCtrl.push("VaccinationListPage", { period: period });
  }
}
