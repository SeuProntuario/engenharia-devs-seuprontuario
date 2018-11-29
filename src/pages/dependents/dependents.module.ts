import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DependentsPage } from "./dependents";
import { DependentFormComponent } from "./dependent-form/dependent-form";

@NgModule({
  declarations: [DependentsPage, DependentFormComponent],
  imports: [IonicPageModule.forChild(DependentsPage)],
  exports: [DependentFormComponent]
})
export class DependentsPageModule {}
