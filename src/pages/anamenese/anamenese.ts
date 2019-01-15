import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the AnamenesePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-anamenese",
  templateUrl: "anamenese.html"
})
export class AnamenesePage {
  enchiridion = [
    {
      name: "Ernesto da Silva",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "José Paulo Silva",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Maria Conceição de Paula",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Beatriz Ferreira dos Santos",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Carlos Eduardo Santos",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AnamenesePage");
  }

  openEnch(ench) {
    this.navCtrl.push("EnchiridionDetailPage", { ench: ench });
  }
}
