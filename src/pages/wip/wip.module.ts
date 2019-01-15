import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WipPage } from './wip';

@NgModule({
  declarations: [
    WipPage,
  ],
  imports: [
    IonicPageModule.forChild(WipPage),
  ],
})
export class WipPageModule {}
