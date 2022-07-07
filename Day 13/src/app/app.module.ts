import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { EmpleavesComponent } from './empleaves/empleaves.component';
import { EmpleavesDetComponent } from './empleaves-det/empleaves-det.component';
import { ArrayComponent } from './array/array.component';



@NgModule({
  declarations: [
    AppComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    EmpleavesComponent,
    EmpleavesDetComponent,
    ArrayComponent,
    
    
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
