import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  Result1:string=" ";
  Result2:string=" ";
  
  constructor(private data1:Data1Service) { }

  ngOnInit(): void {

 const Result3=this.data1.dataSer1();
 const Result4= this.data1.displaydata2();

 this.Result1=Result3;
 this.Result2=Result4;


//  console.log(Result3);
//  console.log(Result4);
 
  
    
  }

}
