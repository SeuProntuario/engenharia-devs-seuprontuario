import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DependentShowPage } from "./dependent-show";
import { DependentsPageModule } from "../dependents.module";

@NgModule({
  declarations: [DependentShowPage],
  imports: [IonicPageModule.forChild(DependentShowPage), DependentsPageModule]
})
export class DependentShowPageModule {}
