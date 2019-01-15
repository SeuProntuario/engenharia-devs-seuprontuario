import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationHistoryPage } from './consultation-history';

@NgModule({
  declarations: [
    ConsultationHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationHistoryPage),
  ],
})
export class ConsultationHistoryPageModule {}
