import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  empData:any=[];
  empData2:any=[];
 
  constructor() { }

  ngOnInit(): void {
    this.empData=[
      {EmpId:1,Empname:"Prashant",Salary:25000},
      {EmpId:2,Empname:"Sagar",Salary:35000},
      {EmpId:3,Empname:"Rohit",Salary:30000},
      {EmpId:4,Empname:"Omkar",Salary:22000},
      {EmpId:5,Empname:"Akshay",Salary:40000},
  ]
  }
  onDetails(empRow:any)
  {
      this.empData2.push(empRow);
      
  }
}
