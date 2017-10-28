import {Component, Input, OnInit} from '@angular/core';
import {PDate} from '../../shared/model/p-date';

@Component({
  selector: 'cc-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  @Input() date: PDate;

  constructor() {
  }

  ngOnInit() {
  }

  getStyle() {
    let color: string;
    if (this.date.selected) {
      color = '#70D06C';
    } else if (this.date.disabled) {
      color = '#E06967';
    } else {
      color = null;
    }

    return {
      'background-color': color,
      'border-radius': '50%',
      'text-align': 'center'
    };
  }

}
