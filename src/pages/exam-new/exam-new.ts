import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ExamNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-exam-new",
  templateUrl: "exam-new.html"
})
export class ExamNewPage {
  show = "find";
  options = [
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
      name: "Laboratórios"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamNewPage");
  }
}
