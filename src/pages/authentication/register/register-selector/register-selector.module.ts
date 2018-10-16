import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterSelectorPage } from './register-selector';

@NgModule({
  declarations: [
    RegisterSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterSelectorPage),
  ],
})
export class RegisterSelectorPageModule {}
