import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  optionSelected: string;
  options = [
    {
      value: "patient",
      viewValue: "Paciente"
    },
    {
      value: "professional",
      viewValue: "Profissional"
    },
    {
      value: "dependent",
      viewValue: "Dependente"
    }
  ];
  nextEvent = {
    local: "Clinica do Coração",
    hour: "9:41",
    date: "03/03/2019",
    description: "Consulta com Dr. Emílio"
  };
  n = 2;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.optionSelected = "patient";
    this.menuCtrl.enable(true, "authenticated");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  getItems() {
    console.log("Searchbar Home");
  }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
