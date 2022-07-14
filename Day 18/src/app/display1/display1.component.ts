import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  data1:string="My angular application";
  traningFee:number=35000;
  todayDate= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
