import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the VaccinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-vaccination",
  templateUrl: "vaccination.html"
})
export class VaccinationPage {
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
  steps = [
    {
      name: "Criança",
      value: "76",
      active: true,
      description: "Suas vacinas tomadas entre 0 e 9 anos"
    },
    {
      name: "Adolescente",
      value: "60",
      active: true,
      description: "Suas vacinas tomadas entre 10 e 19 anos"
    },
    {
      name: "Adulto",
      value: "57",
      active: true,
      description: "Suas vacinas tomadas entre 20 e 50 anos"
    },
    {
      name: "Idoso",
      value: "0",
      active: false,
      description: "Suas vacinas tomadas com mais de 60 anos"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VaccinationPage");
  }

  openStep(name) {
    this.navCtrl.push("VaccinationStepPage", { name: name });
  }
}
