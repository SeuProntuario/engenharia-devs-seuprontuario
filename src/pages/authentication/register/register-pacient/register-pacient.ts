import { Component, Inject } from "@angular/core";
import { RegisterPage } from "../register";

/**
 * Generated class for the RegisterPacientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "register-pacient",
  templateUrl: "register-pacient.html"
})
export class RegisterPacientComponent {
  text: string;

  constructor(@Inject(RegisterPage) public parent: RegisterPage) {
    console.log("Hello RegisterPacientComponent Component");
    this.text = "Informações sobre o Paciente";
  }
}
