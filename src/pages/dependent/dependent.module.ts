import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DependentPage } from './dependent';

@NgModule({
  declarations: [
    DependentPage,
  ],
  imports: [
    IonicPageModule.forChild(DependentPage),
  ],
})
export class DependentPageModule {}
