import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the DependentFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "dependent-form",
  templateUrl: "dependent-form.html"
})
export class DependentFormComponent {
  form: FormGroup;
  text: string;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      cpf: [null, Validators.compose([Validators.required])],
      birth: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      blood: [null, Validators.compose([Validators.required])],
      donor: [null, Validators.compose([Validators.required])],
      covenant: [null, Validators.compose([Validators.required])],
      special: [null, Validators.compose([Validators.required])]
    });
  }
}
