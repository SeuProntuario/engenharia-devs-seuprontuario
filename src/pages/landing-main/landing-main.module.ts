import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingMainPage } from './landing-main';

@NgModule({
  declarations: [
    LandingMainPage,
  ],
  imports: [
    IonicPageModule.forChild(LandingMainPage),
  ],
})
export class LandingMainPageModule {}
