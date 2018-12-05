import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TimelineEvent } from "ngx-timeline";

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-timeline",
  templateUrl: "timeline.html"
})
export class TimelinePage {
  events: Array<TimelineEvent>;
  event: TimelineEvent;
  rowIndex = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.events = new Array<TimelineEvent>();
    this.events.push({
      date: new Date(),
      header: "Consulta",
      body: "Laboratório São Lucas\nDr. Emílio"
    });
    this.events.push({
      date: new Date(),
      header: "Exame",
      body: "Laboratório São Lucas\nDr. Emílio"
    });
    this.events.push({
      date: new Date(),
      header: "Seção de Fisioterapia",
      body: "Clínica do Coração\nDr. Emílio"
    });
  }

  openDetail(event) {
    console.log(event);
    this.navCtrl.push("EventDetailPage", { event: event });
  }
}
