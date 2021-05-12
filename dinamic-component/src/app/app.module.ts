import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CourseBannerComponent } from './components/course-banner/course-banner.component';
import { AdvBannerComponent } from './components/adv-banner/adv-banner.component';
import { BannerDirective } from './directives/banner-directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CourseBannerComponent,
    AdvBannerComponent,
    BannerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
