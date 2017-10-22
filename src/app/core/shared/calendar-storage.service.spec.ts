import { TestBed, inject } from '@angular/core/testing';

import { CalendarStorageService } from './calendar-storage.service';

describe('CalendarStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarStorageService]
    });
  });

  it('should be created', inject([CalendarStorageService], (service: CalendarStorageService) => {
    expect(service).toBeTruthy();
  }));
});
