import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DependentShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dependent-show",
  templateUrl: "dependent-show.html"
})
export class DependentShowPage {
  showTitlePage = "Cadastro de Dependente";
  dependent: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dependent = this.navParams.get("dependent");
    console.log(this.dependent);
    if (this.dependent) {
      this.showTitlePage = this.dependent.name;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DependentShowPage");
  }
}
