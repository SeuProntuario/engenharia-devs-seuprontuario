import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-exams",
  templateUrl: "exams.html"
})
export class ExamsPage {
  exams = [
    {
      name: "Ressonância Magnética",
      local: "ND Núcleo",
      medic: "Dr. Gonzales",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Tomografia Computadorizada",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Exame de Sangue",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Eletrocardiograma",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    },
    {
      name: "Hemograma",
      local: "Clínica do Coração",
      medic: "Dr. Emílio",
      date: "02/12/2018",
      hour: "16:30"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamsPage");
  }

  openExam(exam) {
    this.navCtrl.push("ExamDetailPage", { exam: exam });
  }
}
