import { Component, OnInit,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display1-child',
  templateUrl: './display1-child.component.html',
  styleUrls: ['./display1-child.component.css']
})
export class Display1ChildComponent implements OnInit {
  @Input('proUser') userName:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Display 2 ngOnChanges");
    const { userName } = changes;
    console.log(userName.currentValue,userName.previousValue);
  }

}
