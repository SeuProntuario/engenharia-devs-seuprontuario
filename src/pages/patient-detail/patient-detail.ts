import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the PatientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-patient-detail",
  templateUrl: "patient-detail.html"
})
export class PatientDetailPage {
  ench: any;
  dates = [
    {
      value: new Date()
    },
    {
      value: new Date()
    },
    {
      value: new Date()
    },
    {
      value: new Date()
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ench = navParams.get("ench");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PatientDetailPage");
  }

  open(page) {
    this.navCtrl.push(page);
  }

  openExam() {
    let exam = {
      name: "Hemograma",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    };
    this.navCtrl.push("ExamDetailPage", { exam: exam });
  }
}
