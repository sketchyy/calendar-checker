import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule, CalendarModule, ContextMenuModule, SlideMenuModule} from 'primeng/primeng';
import {CCCalendarComponent} from './cc-calendar.component';
import {CalendarCellComponent} from './calendar-cell/calendar-cell.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    CalendarModule,
    ContextMenuModule,
    ButtonModule,
    SlideMenuModule
  ],
  exports: [
    CCCalendarComponent
  ],
  declarations: [
    CCCalendarComponent,
    CalendarCellComponent
  ]
})
export class CCCalendarModule { }
