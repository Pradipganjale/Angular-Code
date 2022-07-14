import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  arrUsers:any=[{userId:1,username:'pradip',status:'A'},
                {userId:2,username:'pratik',status:'D'},
                {userId:3,username:'sagar',status:'A'},
                {userId:4,username:'vinayak',status:'D'},
                {userId:5,username:'Akshay',status:'A'},
                {userId:6,username:'prashant',status:'A'},
                {userId:7,username:'Rohit',status:'B'}]

  constructor() { }

  ngOnInit(): void {
  }

}
