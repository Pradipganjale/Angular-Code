import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display1ChildComponent } from './display1-child/display1-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactformComponent } from './contactform/contactform.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display1ChildComponent,
    ContactformComponent,
    EmployeeComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
