import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { HideshowComponent } from './hideshow/hideshow.component';
import { ArrayAssignmentComponent } from './array-assignment/array-assignment.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpinfoComponent,
    HideshowComponent,
    ArrayAssignmentComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
