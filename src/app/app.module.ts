import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CCCalendarModule} from './cc-calendar/cc-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CCCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
