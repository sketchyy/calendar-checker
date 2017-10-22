import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarStorageService} from './shared/calendar-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    CalendarStorageService
  ]
})
export class CoreModule { }
