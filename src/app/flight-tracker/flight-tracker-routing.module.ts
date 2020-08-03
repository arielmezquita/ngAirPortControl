import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightTrackerComponent } from './flight-tracker.component';

const routes: Routes = [{ path: '', component: FlightTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightTrackerRoutingModule { }
