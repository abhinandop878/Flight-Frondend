import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  flightName=""
  origin=""
  destination=""
  capacity=""
  readValue=()=>{
    let data={
      "flightName":this.flightName,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    this.myapi.addFlight(data).subscribe((response)=>{
      console.log(response)
      alert("Successfully Added!")
      this.flightName=""
      this.origin=""
      this.destination=""
      this.capacity=""
    })
  }
  ngOnInit(): void {
  }

}
