import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-assignment',
  templateUrl: './array-assignment.component.html',
  styleUrls: ['./array-assignment.component.css']
})
export class ArrayAssignmentComponent implements OnInit {

  array: any =[100,101,102,103,105];
  constructor() { }

  ngOnInit(): void {
  }

}
