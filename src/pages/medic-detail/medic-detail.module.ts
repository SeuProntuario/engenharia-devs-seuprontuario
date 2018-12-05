import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicDetailPage } from './medic-detail';

@NgModule({
  declarations: [
    MedicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicDetailPage),
  ],
})
export class MedicDetailPageModule {}
