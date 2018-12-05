import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoundListPage } from './found-list';

@NgModule({
  declarations: [
    FoundListPage,
  ],
  imports: [
    IonicPageModule.forChild(FoundListPage),
  ],
})
export class FoundListPageModule {}
