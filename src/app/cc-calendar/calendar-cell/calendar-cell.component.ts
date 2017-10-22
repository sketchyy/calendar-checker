import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PDate} from '../../shared/model/p-date';

@Component({
  selector: 'cc-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarCellComponent implements OnInit {

  @Input() date: PDate;

  // @Output() cellClick = new EventEmitter<PDate>();

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any) {
    // console.log('cell ', event, this.date);
    // this.cellClick.emit(this.date);
  }

}
