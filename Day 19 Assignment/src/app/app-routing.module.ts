import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { ContactformComponent } from './contactform/contactform.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'display1',component:Display1Component},
  {path:'contact' ,component:ContactformComponent},
  {path:'employee' ,component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
