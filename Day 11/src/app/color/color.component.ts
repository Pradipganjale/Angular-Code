import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  ColorType:color=color.None;
  constructor() { }

  ngOnInit(): void {
  }
  onColor(colorNo:any)
  {
    if(colorNo === 1) {
      this.ColorType = color.Red;
    } else if(colorNo === 2 ) {
      this.ColorType  = color.Green;
    } else if(colorNo === 3) {
      this.ColorType  = color.Blue 
    } else if(colorNo === 4) {
      this.ColorType  = color.Yellow
    }else
    {
      this.ColorType  = color.None
    }
  }

}
enum color {
  None = "None",
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Yellow ="Yellow"
}