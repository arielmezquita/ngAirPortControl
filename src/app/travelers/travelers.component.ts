import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.component.html',
  styleUrls: ['./travelers.component.css']
})
export class TravelersComponent implements OnInit {

counter(i: number) {
    return new Array(i);
}

  formDataTraveler = {
    firstname: null,
    lastname: null,
    email: null,
    age: null, 
    flight: null
  }
  flightavailable = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.flightavailable =  [ JSON.parse(localStorage.getItem("flights"))];
  }

  getflights(){

  }    

  travelersRequest(){
    const firstname = this.formDataTraveler.firstname;
    const lastname = this.formDataTraveler.lastname;
    const email = this.formDataTraveler.email;
    const age = this.formDataTraveler.age;
    const flight = this.formDataTraveler.flight;

    const dataToSend = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      age: age,
      flight: flight
    }

    console.log(dataToSend);

    localStorage.setItem("traverlers", JSON.stringify(dataToSend));
    
  }
}
