import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MatAngularComponent } from './mat-angular/mat-angular.component';



const routes: Routes = [
  {path:"display1" ,component:EmployeelistComponent},
  {path:"display2" ,component:UserLoginComponent},
  {path:"matangular" ,component:MatAngularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
