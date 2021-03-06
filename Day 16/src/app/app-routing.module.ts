import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';

const routes: Routes = [
  {path :'display1' , component:Display1Component},
  {path :'display2' , component:Display2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
