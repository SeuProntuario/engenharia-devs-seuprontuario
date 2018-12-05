import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicListPage } from './medic-list';

@NgModule({
  declarations: [
    MedicListPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicListPage),
  ],
})
export class MedicListPageModule {}
