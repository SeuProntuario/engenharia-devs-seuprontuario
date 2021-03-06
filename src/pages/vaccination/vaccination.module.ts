import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VaccinationPage } from "./vaccination";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [VaccinationPage],
  imports: [
    IonicPageModule.forChild(VaccinationPage),
    NgCircleProgressModule.forRoot({
      radius: 50,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ]
})
export class VaccinationPageModule {}
