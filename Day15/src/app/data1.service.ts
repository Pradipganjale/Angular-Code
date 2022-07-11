import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }

  public publicMod ="This is my sevice using public modifier";
}
