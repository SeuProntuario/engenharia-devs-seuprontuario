import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnchiridionDetailPage } from './enchiridion-detail';

@NgModule({
  declarations: [
    EnchiridionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EnchiridionDetailPage),
  ],
})
export class EnchiridionDetailPageModule {}
