import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, Config } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;
  rootPage: any = "LandingPage";

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private config: Config
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.config.set("ios", "backButtonText", "");
    });
  }

  logout() {
    this.nav.setRoot("LandingPage", {}, { animate: false });
  }
  openPage(page) {
    this.nav.push(page, {}, { animate: false });
  }
}
