import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ConsultationNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-consultation-new",
  templateUrl: "consultation-new.html"
})
export class ConsultationNewPage {
  show = "find";
  options = [
    {
      avatar: "assets/icon/avatar.svg",
      name: "Médicos"
    },
    {
      avatar: "assets/icon/hospital (1).svg",
      name: "Hospitais"
    },
    {
      avatar: "assets/icon/health.svg",
      name: "Postos de Saúde"
    },
    {
      avatar: "assets/icon/feeding-bottle.svg",
      name: "Clínicas"
    },
    {
      avatar: "assets/icon/physical.svg",
      name: "Fisioterapeutas"
    },
    {
      avatar: "assets/icon/psychology.svg",
      name: "Psicológos"
    },
    {
      avatar: "assets/icon/tooth.svg",
      name: "Dentistas"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ConsultationNewPage");
  }
}
