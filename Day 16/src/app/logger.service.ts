import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  LoggerData()
  {
    return "Admin logged today at 11.00 am";
  }
}
