import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) }, 
  { path: 'travelers', loadChildren: () => import('./travelers/travelers.module').then(m => m.TravelersModule) }, 
  { path: 'flight-tracker', loadChildren: () => import('./flight-tracker/flight-tracker.module').then(m => m.FlightTrackerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
