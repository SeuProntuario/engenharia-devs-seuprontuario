import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-landing",
  templateUrl: "landing.html"
})
export class LandingPage {
  slides = [
    {
      title: "Bem-vindo ao Seu Prontuário!",
      description:
        "O <b>Seu Prontuário</b> é o ambiente interativo que reune soluções para Pacientes, Médicos e Consultórios na realização de procedimentos de consulta e acompanhamento.",
      image: "assets/icon/icon_transp.png"
    },
    {
      title: "Você é Paciente?",
      description:
        "<b>Seu Prontuário</b> é a solução para o armazenamento e fácil acesso do seu histórico médico.",
      image: "assets/icon/avatar (1).svg"
    },
    {
      title: "Você é Profissional Independente?",
      description:
        "O <b>Seu Pronturário</b> é a plataforma que permite um acompanhamento facilitado do acompanhamento dos procedimentos dos seus pacientes, além de ser um canal de comunicação direto.",
      image: "assets/icon/avatar.svg"
    },
    {
      title: "Você é Represente de Consultório?",
      description:
        "O <b>Seu Prontuário</b> é a melhor opção para sua empresa, como sistema de acompanhamento de exames.",
      image: "assets/icon/hospital (1).svg"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LandingPage");
  }

  open(page) {
    this.navCtrl.setRoot(page);
  }
}
