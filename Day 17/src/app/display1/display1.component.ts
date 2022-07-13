import { Component, OnInit } from '@angular/core';
import { contact } from '../data1.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  Result1:string="";
  Result2:string="";
  Result3:string="";
  Result4:string="";

  constructor() { }

  ngOnInit(): void {

    const data1=new contact.AddNewContact();
    this.Result1=data1.display1();

    const data2=new contact.EditContact();
    this.Result2=data2.display2();

    const data3=new contact.DeleteContact();
    this.Result3=data3.display3();
    
    const data4=new contact.ListContact();
    this.Result4=data4.display4();
  }

}
