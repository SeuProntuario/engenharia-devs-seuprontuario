import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the FinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-finder",
  templateUrl: "finder.html"
})
export class FinderPage {
  show = "find";
  options = [
    {
      avatar: "assets/icon/ambulance.svg",
      name: "EMERGÊNCIA",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/avatar.svg",
      name: "Médicos",
      component: "MedicListPage"
    },
    {
      avatar: "assets/icon/hospital (1).svg",
      name: "Hospitais",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/health.svg",
      name: "Postos de Saúde",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/feeding-bottle.svg",
      name: "Clínicas",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/physical.svg",
      name: "Fisioterapeutas",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/psychology.svg",
      name: "Psicológos",
      component: "FoundListPage"
    },
    {
      avatar: "assets/icon/tooth.svg",
      name: "Dentistas",
      component: "FoundListPage"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FinderPage");
  }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
