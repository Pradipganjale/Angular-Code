import { Injectable } from '@angular/core';
import { EmployeesModule } from './employees.module';

@Injectable({
  providedIn: EmployeesModule
})
export class Data2Service {

  constructor() { }

  display():string{

    return "use employee module";
  }
}
