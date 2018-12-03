import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AccountPage } from "./account";
import { DependentsPageModule } from "../dependents/dependents.module";

@NgModule({
  declarations: [AccountPage],
  imports: [IonicPageModule.forChild(AccountPage), DependentsPageModule]
})
export class AccountPageModule {}
