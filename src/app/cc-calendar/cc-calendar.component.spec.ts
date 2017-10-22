import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCCalendarComponent } from './cc-calendar.component';

describe('CCCalendarComponent', () => {
  let component: CCCalendarComponent;
  let fixture: ComponentFixture<CCCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
