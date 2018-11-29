import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DependentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dependents",
  templateUrl: "dependents.html"
})
export class DependentsPage {
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
      kinship: "pai"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DependentPage");
  }

  showDependentForm(dependent = null) {
    this.navCtrl.push("DependentShowPage", { dependent: dependent });
  }
}
