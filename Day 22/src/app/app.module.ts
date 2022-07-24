import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment1DetComponent } from './assignment1-det/assignment1-det.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment1Component,
    Assignment1DetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
