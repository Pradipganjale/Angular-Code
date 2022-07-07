import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {

   firstval:string="";
   lastval:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(first:any,second:any){
    //console.log(first.value);
   // console.log(second.value);
    this.firstval = first.value;
    this.lastval = second.value;
  }

}
