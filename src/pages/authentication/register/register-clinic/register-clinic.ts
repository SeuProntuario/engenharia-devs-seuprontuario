import { Component, Inject } from "@angular/core";
import { RegisterPage } from "../register";

/**
 * Generated class for the RegisterClinicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "register-clinic",
  templateUrl: "register-clinic.html"
})
export class RegisterClinicComponent {
  text: string;

  constructor(@Inject(RegisterPage) public parent: RegisterPage) {
    console.log("Hello RegisterClinicComponent Component");
    this.text = "Informações sobre o Consultório ou Clínica";
  }
}
