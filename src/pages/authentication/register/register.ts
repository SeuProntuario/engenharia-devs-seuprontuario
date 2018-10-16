import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder } from "@angular/forms";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  typeSelected: string;
  options = [
    { value: "pacient", viewValue: "Paciente" },
    { value: "medical", viewValue: "Médico" },
    { value: "clinic", viewValue: "Clínica/Consultório" }
  ];
  form: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      type: [null]
    });
    this.typeSelected = this.navParams.get("type");
    console.log(this.typeSelected);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
}
