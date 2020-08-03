import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-tracker',
  templateUrl: './flight-tracker.component.html',
  styleUrls: ['./flight-tracker.component.css']
})
export class FlightTrackerComponent implements OnInit {

  dataExtractor = 
    {
      origin: null,
      destination: null,
      timedeparts: null,
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
