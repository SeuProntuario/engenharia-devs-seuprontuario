import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { RegisterPage } from "./register";
import { RegisterClinicComponent } from "./register-clinic/register-clinic";
import { RegisterMedicalComponent } from "./register-medical/register-medical";
import { RegisterPacientComponent } from "./register-pacient/register-pacient";

@NgModule({
  declarations: [
    RegisterPage,
    RegisterClinicComponent,
    RegisterMedicalComponent,
    RegisterPacientComponent
  ],
  imports: [IonicPageModule.forChild(RegisterPage)],
  entryComponents: [
    RegisterClinicComponent,
    RegisterMedicalComponent,
    RegisterPacientComponent
  ]
})
export class RegisterPageModule {}
