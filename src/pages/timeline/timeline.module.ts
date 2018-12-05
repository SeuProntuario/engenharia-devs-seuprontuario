import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TimelinePage } from "./timeline";
import { NgxTimelineModule } from "ngx-timeline";

@NgModule({
  declarations: [TimelinePage],
  imports: [IonicPageModule.forChild(TimelinePage), NgxTimelineModule]
})
export class TimelinePageModule {}
