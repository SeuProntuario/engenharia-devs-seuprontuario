import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-event-detail",
  templateUrl: "event-detail.html"
})
export class EventDetailPage {
  event = {
    name: "Consulta Neurologista",
    local: "Clínica do Coração",
    medic: "Dr. Emílio",
    date: "02/12/2018",
    hour: "16:30"
  };
  drugs = [
    {
      name: "Comprimidim 20mg"
    },
    {
      name: "Remedinol 30mg"
    },
    {
      name: "Saradoentim 50mg"
    },
    {
      name: "Paradoentol 25mg"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventDetailPage");
  }
}
