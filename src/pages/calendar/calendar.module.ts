import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CalendarPage } from "./calendar";
import { NgxTimelineModule } from "ngx-timeline";

@NgModule({
  declarations: [CalendarPage],
  imports: [IonicPageModule.forChild(CalendarPage), NgxTimelineModule]
})
export class CalendarPageModule {}
