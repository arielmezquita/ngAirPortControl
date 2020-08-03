import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTrackerComponent } from './flight-tracker.component';

describe('FlightTrackerComponent', () => {
  let component: FlightTrackerComponent;
  let fixture: ComponentFixture<FlightTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
