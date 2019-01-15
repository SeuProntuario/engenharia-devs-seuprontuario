import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ReferralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-referral",
  templateUrl: "referral.html"
})
export class ReferralPage {
  patients = [
    {
      name: "Ernesto da Silva",
      local: "Clínica do Coração",
      medic: "Dr. Emílio Carlos",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "José Paulo Silva",
      local: "Clínica do Coração",
      medic: "Dr. Jorge Silva",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Maria Conceição de Paula",
      local: "Clínica do Coração",
      medic: "Dr. Eduardo",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Beatriz Ferreira dos Santos",
      local: "Clínica do Coração",
      medic: "Dr. Paulo Silva",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Carlos Eduardo Santos",
      local: "Clínica do Coração",
      medic: "Dr. José Silva",
      date: "02/12/2018",
      hour: "16:30"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReferralPage");
  }

  getItems(ev) {
    console.log(ev);
  }
}
