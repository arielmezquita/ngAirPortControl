import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightTrackerRoutingModule } from './flight-tracker-routing.module';
import { FlightTrackerComponent } from './flight-tracker.component';


@NgModule({
  declarations: [FlightTrackerComponent],
  imports: [
    CommonModule,
    FlightTrackerRoutingModule
  ]
})
export class FlightTrackerModule { }
