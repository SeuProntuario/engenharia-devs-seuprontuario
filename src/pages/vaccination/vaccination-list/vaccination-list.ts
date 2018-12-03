import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the VaccinationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-vaccination-list",
  templateUrl: "vaccination-list.html"
})
export class VaccinationListPage {
  vaccinations = [
    {
      name: "Pentavalente",
      description:
        "previne difteria, tétano, coqueluche, hepatite B e meningite e infecções por HiB - 1ª Dose"
    },
    {
      name: "Inativada Poliomielite",
      description: "previne poliomielite ou paralisia infantil - 1ª Dose"
    },
    {
      name: "Pneumocócica",
      description:
        "previne pneumonia, otite, meningite e outras doenças causadas pelo Pneumococo - 1ª Dose"
    },
    {
      name: "Rotavírus",
      description: "previne diarreia por Rotavirus - 1ª Dose"
    }
  ];
  period: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.period = navParams.get("period");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VaccinationListPage");
  }
}
