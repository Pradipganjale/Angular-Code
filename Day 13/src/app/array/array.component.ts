import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  arrNums:any=[10,20,30,40];
  constructor() { }

  ngOnInit(): void {
  }

}
