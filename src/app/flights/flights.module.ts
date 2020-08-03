import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FlightsComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    FormsModule
  ]
})
export class FlightsModule { }
