import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from '@angular/forms';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SeachFlightComponent } from './seach-flight/seach-flight.component'
const appRoutes:Routes=[
  {
    path:"",component:AddFlightComponent
  },
  {
    path:"viewFlights",component:ViewFlightComponent
  },
  {
    path:"searchFlights",component:SeachFlightComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightComponent,
    ViewFlightComponent,
    SeachFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
