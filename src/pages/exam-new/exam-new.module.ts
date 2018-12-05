import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamNewPage } from './exam-new';

@NgModule({
  declarations: [
    ExamNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamNewPage),
  ],
})
export class ExamNewPageModule {}
