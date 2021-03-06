import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EnchiridionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-enchiridion",
  templateUrl: "enchiridion.html"
})
export class EnchiridionPage {
  enchiridion = [
    {
      name: "Consulta Neurologista",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Consulta Cardiologista",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Consulta Oftalmologista",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Consulta Otorrinolaringologista",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Consulta Neurologista",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnchiridionPage");
  }

  openEnch(ench) {
    this.navCtrl.push("EnchiridionDetailPage", { ench: ench });
  }
}
