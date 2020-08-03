import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelersComponent } from './travelers.component';

const routes: Routes = [{ path: '', component: TravelersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelersRoutingModule { }
