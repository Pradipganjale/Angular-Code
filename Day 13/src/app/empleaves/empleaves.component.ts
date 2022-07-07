import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleaves',
  templateUrl: './empleaves.component.html',
  styleUrls: ['./empleaves.component.css']
})
export class EmpleavesComponent implements OnInit {

empname:string="Pradip Ganjale";
designation:string="Angular Developer";

  constructor() { }

  ngOnInit(): void {
  }

}
