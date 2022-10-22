import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewFlights().subscribe((data)=>{
      this.flightData=data
    })
  }
  deleteData=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteFlights(data).subscribe((response)=>{
      alert("Deleted!")

    })
    this.fetchData()
  }
  flightData:any=[]
  ngOnInit(): void {
  }

}
