import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CovenantPage } from './covenant';

@NgModule({
  declarations: [
    CovenantPage,
  ],
  imports: [
    IonicPageModule.forChild(CovenantPage),
  ],
})
export class CovenantPageModule {}
