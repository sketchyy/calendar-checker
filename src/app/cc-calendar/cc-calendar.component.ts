import {Component, OnInit} from '@angular/core';
import {CalendarStorageService} from '../core/shared/calendar-storage.service';
import {PDate} from '../shared/model/p-date';

@Component({
  selector: 'cc-calendar',
  templateUrl: './cc-calendar.component.html',
  styleUrls: ['./cc-calendar.component.css']
})
export class CCCalendarComponent implements OnInit {

  dates: Date[];

  constructor(private calendarStorageService: CalendarStorageService) {
  }

  ngOnInit() {
    this.dates = this.calendarStorageService.storage;
  }

  /**
   * Method used to clear ngModel dates, because primeng has bug:
   * https://github.com/primefaces/primeng/issues/2261
   * @param {PDate} pDate
   */
  onCellClick(pDate: PDate) {
    // TODO: Bind logic on ngModel

    const equalsPDate = (d: Date) => {
      // console.log(d.getFullYear(), d.getMonth(), d.getDate());
      // console.log(pDate.year, pDate.month, pDate.day);
      return pDate.year === d.getFullYear() && pDate.month === d.getMonth() && d.getDate() === pDate.day;
    };

    const containsPDate = (dateArr: Date[]): boolean => {
      return dateArr && dateArr.find(equalsPDate) !== undefined;
    };

    if (containsPDate(this.dates)) {
      this.dates = this.dates.filter(d => !equalsPDate(d));
      if (this.dates.length === 0) {
        this.dates = null;
      }
      this.calendarStorageService.persist(this.dates);
    }
  }

  onSelection() {
    this.calendarStorageService.persist(this.dates);
  }

}
