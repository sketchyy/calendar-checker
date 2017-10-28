import {Injectable} from '@angular/core';
import {PDate} from '../../shared/model/p-date';
import {equals} from '../../shared/pdate-utils';

@Injectable()
export class CalendarStorageService {
  public storage: PDate[];

  constructor() {
    try {
      const savedState = JSON.parse(localStorage.getItem('state'));
      this.storage = savedState && Array.isArray(savedState) ?
        savedState.filter(ss => typeof ss === 'object') :
        [];
    } catch (e) {
      this.storage = [];
      console.error('Looks like app state is corrupted, check local storage.');
    }
  }

  get(date: PDate) {
    const result = this.storage.find(sd => equals(sd, date));
    return result ? result : date;
  }

  select(date: PDate) {
    date.selected = !date.selected;
    if (date.selected && date.disabled) {
      date.disabled = false;
    }
    this.persist(date);
  }

  disable(date: PDate) {
    date.disabled = !date.disabled;
    if (date.disabled && date.selected) {
      date.selected = false;
    }
    this.persist(date);
  }

  private persist(date) {
    if (!date.selected && !date.disabled) {
      if (this.storage.includes(date)) {
        this.storage = this.storage.filter(sd => sd !== date);
      }
    } else {
      if (!this.storage.includes(date)) {
        this.storage.push(date);
      }
    }
    localStorage.setItem('state', JSON.stringify(this.storage));
  }
}
