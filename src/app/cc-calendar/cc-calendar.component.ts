import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarStorageService} from '../core/shared/calendar-storage.service';
import {PDate} from '../shared/model/p-date';
import {MenuItem, SlideMenu} from 'primeng/primeng';

@Component({
  selector: 'cc-calendar',
  templateUrl: './cc-calendar.component.html',
  styleUrls: ['./cc-calendar.component.css']
})
export class CCCalendarComponent implements OnInit {

  dates: Date[];
  items: MenuItem[];
  ru: any;

  clickedDate: PDate;

  @ViewChild(SlideMenu) slideMenu: SlideMenu;

  constructor(private calendarStorageService: CalendarStorageService) {
  }

  ngOnInit() {
    this.ru = {
      firstDayOfWeek: 1,
      // dayNames: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
      // dayNamesShort: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      // monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      // today: 'Сегодня',
      // clear: 'Очистить'
    };

    this.items = [
      {label: 'Select', icon: 'fa-check', command: (event) => this.selectDate(this.clickedDate)},
      {label: 'Disable', icon: 'fa-close', command: (event) => this.disableDate(this.clickedDate)},
      {label: 'Cancel', icon: 'fa-ban', command: (event) => this.slideMenu.hide()}
    ];
  }

  getStoredDate(date) {
    return this.calendarStorageService.get(date);
  }

  /**
   * Method used to clear ngModel dates, because primeng has bug:
   * https://github.com/primefaces/primeng/issues/2261
   * @param {PDate} pDate
   */
  onCellClick(event: any, pDate: PDate) {
    // TODO: Bind logic on ngModel
    this.clickedDate = pDate;
    this.slideMenu.show(event);


    // const equalsPDate = (d: Date) => {
    //   // console.log(d.getFullYear(), d.getMonth(), d.getDate());
    //   // console.log(pDate.year, pDate.month, pDate.day);
    //   return pDate.year === d.getFullYear() && pDate.month === d.getMonth() && d.getDate() === pDate.day;
    // };
    //
    // const containsPDate = (dateArr: Date[]): boolean => {
    //   return dateArr && dateArr.find(equalsPDate) !== undefined;
    // };
    //
    // if (containsPDate(this.dates)) {
    //   this.dates = this.dates.filter(d => !equalsPDate(d));
    //   if (this.dates.length === 0) {
    //     this.dates = null;
    //   }
    //   this.calendarStorageService.persist(this.dates);
    // }
  }

  // onSelection() {
  //   this.calendarStorageService.persist(this.dates);
  // }

  selectDate(date: PDate) {
    this.slideMenu.hide();
    this.calendarStorageService.select(date);
  }

  disableDate(date: PDate) {
    this.slideMenu.hide();
    this.calendarStorageService.disable(date);
  }

}
