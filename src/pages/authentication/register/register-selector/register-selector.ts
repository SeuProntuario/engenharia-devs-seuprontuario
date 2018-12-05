import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the RegisterSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register-selector",
  templateUrl: "register-selector.html"
})
export class RegisterSelectorPage {
  slide = {
    title: "Bem-vindo ao Seu Prontuário!",
    description:
      "O <b>Seu Prontuário</b> é o ambiente interativo que reune soluções para Pacientes, Médicos e Consultórios na realização de procedimentos de consulta e acompanhamento.",
    image: "assets/icon/icon_transp.png"
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterSelectorPage");
  }

  open(page, type) {
    this.navCtrl.setRoot(page, { type: type }, { animate: false });
  }
}
