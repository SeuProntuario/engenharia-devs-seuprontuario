import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TimelineEvent } from "ngx-timeline";

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {
  events: Array<TimelineEvent>;
  event: TimelineEvent;
  rowIndex = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CalendarPage");
    this.events = new Array<TimelineEvent>();
    this.events.push({
      date: new Date("December 17, 2018"),
      header: "Ernesto da Silva",
      body: "Retorno - convênio\nDr. Emílio"
    });
    this.events.push({
      date: new Date("December 16, 2018"),
      header: "José Paulo Silva",
      body: "Retorno - convênio\nDr. Emílio"
    });
    this.events.push({
      date: new Date("December 19, 2018"),
      header: "Maria Conceição de Paula",
      body: "Retorno - SUS\nDr. Emílio"
    });
  }

  openDetail(event) {
    console.log(event);
    let newEvent = this.events[event];
    console.log(newEvent);
    this.navCtrl.push("PatientDetailPage", { ench: newEvent });
  }
}
