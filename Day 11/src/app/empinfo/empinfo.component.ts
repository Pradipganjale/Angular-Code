import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {

  ContactId: number = 123;
  ContactName: String = "Pradip Ganjale";
  Company: String = "Shuraya Infosoft Pvt Ltd";
  DueAmount : number = 4555;
  Phone: any =  "7757814921";
  Area = "South Zone";

  constructor() { }

  ngOnInit(): void {
  }

}
