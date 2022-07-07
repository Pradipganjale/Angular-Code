import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleaves-det',
  templateUrl: './empleaves-det.component.html',
  styleUrls: ['./empleaves-det.component.css']
})
export class EmpleavesDetComponent implements OnInit {
@Input("propLeaves") leaves:any;
  constructor() { }

  ngOnInit(): void {
  }

}
