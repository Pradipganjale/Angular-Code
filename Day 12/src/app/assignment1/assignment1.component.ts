import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  Result :String="";
  ngOnInit(): void {
  }
  onSubmit() {
    this.Result = this.empName();
    //console.log(Result);
    
  }
  empName():String {
    
    return "Rohit Kumar";
  }
}
