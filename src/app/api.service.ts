import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFlights=()=>{
    return this.http.get("http://localhost:8080/viewFlights")
  }
  addFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/addFlights",data)
  }
  deleteFlights=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteFlights",data)
  }
  searchFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/searchFlight",data)
  }
}
