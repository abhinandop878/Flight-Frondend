import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seach-flight',
  templateUrl: './seach-flight.component.html',
  styleUrls: ['./seach-flight.component.css']
})
export class SeachFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  flightName=""
  searchData=()=>{
    let data={
      "flightName":this.flightName
    }
    this.myapi.searchFlight(data).subscribe((res)=>{
      this.data=res
    })
  }
  data:any=[]
  ngOnInit(): void {
  }

}
