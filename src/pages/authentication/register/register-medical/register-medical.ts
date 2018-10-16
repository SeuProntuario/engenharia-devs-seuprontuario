import { Component, Inject } from "@angular/core";
import { RegisterPage } from "../register";

/**
 * Generated class for the RegisterMedicalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "register-medical",
  templateUrl: "register-medical.html"
})
export class RegisterMedicalComponent {
  text: string;

  constructor(@Inject(RegisterPage) public parent: RegisterPage) {
    console.log("Hello RegisterMedicalComponent Component");
    this.text = "Informações sobre o Médico";
  }
}
