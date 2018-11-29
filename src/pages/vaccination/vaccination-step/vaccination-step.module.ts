import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VaccinationStepPage } from "./vaccination-step";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [VaccinationStepPage],
  imports: [
    IonicPageModule.forChild(VaccinationStepPage),
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
export class VaccinationStepPageModule {}
