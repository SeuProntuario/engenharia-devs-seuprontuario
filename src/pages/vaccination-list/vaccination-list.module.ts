import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaccinationListPage } from './vaccination-list';

@NgModule({
  declarations: [
    VaccinationListPage,
  ],
  imports: [
    IonicPageModule.forChild(VaccinationListPage),
  ],
})
export class VaccinationListPageModule {}
