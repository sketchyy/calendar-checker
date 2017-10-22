import {Injectable} from '@angular/core';

@Injectable()
export class CalendarStorageService {
  public storage: Date[];

  constructor() {
    try {
      const strings: string[] = JSON.parse(localStorage.getItem('state'));
      if (strings && Array.isArray(strings)) {
        this.storage = strings.map(s => new Date(s));
      }
    } catch (e) {
      console.error('Looks like app state is corrupted, check local storage.');
    }
  }

  persist(dates) {
    localStorage.setItem('state', JSON.stringify(dates));
  }

}
