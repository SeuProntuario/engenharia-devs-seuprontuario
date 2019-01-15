import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnamenesePage } from './anamenese';

@NgModule({
  declarations: [
    AnamenesePage,
  ],
  imports: [
    IonicPageModule.forChild(AnamenesePage),
  ],
})
export class AnamenesePageModule {}
