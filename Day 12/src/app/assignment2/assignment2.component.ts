import { Component, OnInit } from '@angular/core';
interface IEmployee {
  contactname:string,
  contactadd:string,
  contactphone:number,
  areacode:any
}
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }
  arr:any;
  ngOnInit(): void {
  }

  Display() {
    let arrEmp:IEmployee = {contactname:"Pradip Ganjale",contactadd:"H.No.143",contactphone:7757814921,areacode:"Pune"};
    this.arr = arrEmp;
    console.log(arrEmp);
  }

}
