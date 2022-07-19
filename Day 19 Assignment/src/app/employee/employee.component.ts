import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empId1:number=0;
  childShow:boolean=true;
    constructor() { 
      console.log("Display1 constructor");
    }
    ngOnInit(): void {
      console.log("Display1 ngOnInit");
    }
    onCounterHandler(){
      this.empId1 = this.empId1 + 1;
    }
    onDestroyHandler()
    {
      this.childShow =! this.childShow;
    }

}
