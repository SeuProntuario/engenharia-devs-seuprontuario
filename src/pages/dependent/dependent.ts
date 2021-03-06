import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DependentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dependent",
  templateUrl: "dependent.html"
})
export class DependentPage {
  dependents = [
    {
      name: "Mateus Ribeiro da Silva",
      avatar: "",
      kinship: "filho"
    },
    {
      name: "Eduarda Ribeiro da Silva",
      avatar: "",
      kinship: "filha"
    },
    {
      name: "João Castanhare Ribeiro",
      avatar: "",
      kinship: "mãe"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DependentPage");
  }

  createDependent() {
    this.navCtrl.push("DependentCreatePage");
  }

  showDependent(dependent) {
    this.navCtrl.push("DependentShowPage", { dependent: dependent });
  }
}
