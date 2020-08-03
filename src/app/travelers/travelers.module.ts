import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelersRoutingModule } from './travelers-routing.module';
import { TravelersComponent } from './travelers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TravelersComponent],
  imports: [
    CommonModule,
    TravelersRoutingModule,
    FormsModule
  ]
})
export class TravelersModule { }
