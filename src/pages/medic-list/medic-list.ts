import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MedicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-medic-list",
  templateUrl: "medic-list.html"
})
export class MedicListPage {
  medics = [
    {
      name: "Dr. Emílio",
      crm: "387238632683263",
      speciality: "Ortopedista",
      locals: [
        { name: "Clínica do Coração", endereco: "Rua das Antenas, 123" },
        {
          name: "Centro Hospitalar São Carlos",
          endereco: "Rua Adalberto Gonçalves, 136"
        },
        {
          name: "Clínica Geral de Campo Mourão",
          endereco: "Rua Peabiru, 131"
        }
      ]
    },
    {
      name: "Dr. João Carlos",
      crm: "73293272386238723",
      speciality: "Oftalmologista",
      locals: [
        {
          name: "Clínica Santa Luzia",
          endereco: "Av Comendador Norberto Marcondes, 987"
        },
        {
          name: "Clínica Geral de Campo Mourão",
          endereco: "Rua Peabiru, 131"
        }
      ]
    },
    {
      name: "Dr. Pedro Eduardo",
      crm: "38723683232652367",
      speciality: "Cardiologista",
      locals: [
        { name: "Clínica São José", endereco: "Rua das Antenas, 123" },
        {
          name: "Centro Hospitalar 2 de Julho",
          endereco: "Rua Adalberto Gonçalves, 136"
        },
        {
          name: "Centro Hospitalar São Carlos",
          endereco: "Rua Adalberto Gonçalves, 136"
        },
        {
          name: "Clínica Santa Luzia",
          endereco: "Av Comendador Norberto Marcondes, 987"
        }
      ]
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MedicListPage");
  }

  openMedic(medic) {
    this.navCtrl.push("MedicDetailPage", { medic: medic });
  }
}
