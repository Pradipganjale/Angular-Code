import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserchidComponent } from './userchid/userchid.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    ProductlistComponent,
    ProductaddComponent,
    UserlistComponent,
    UserchidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
