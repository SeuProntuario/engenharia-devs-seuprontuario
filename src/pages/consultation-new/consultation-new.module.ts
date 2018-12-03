import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationNewPage } from './consultation-new';

@NgModule({
  declarations: [
    ConsultationNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationNewPage),
  ],
})
export class ConsultationNewPageModule {}
