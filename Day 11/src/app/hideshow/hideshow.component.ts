import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hideshow',
  templateUrl: './hideshow.component.html',
  styleUrls: ['./hideshow.component.css']
})
export class HideshowComponent implements OnInit {

  showBox : boolean = true;
 
  constructor() { }

  ngOnInit(): void {
  }
  onToggle(){
    this.showBox = !this.showBox;
  }

}
