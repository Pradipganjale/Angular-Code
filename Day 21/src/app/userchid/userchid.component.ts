import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-userchid',
  templateUrl: './userchid.component.html',
  styleUrls: ['./userchid.component.css']
})
export class UserchidComponent implements OnInit {
@Input('propUser') userData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
