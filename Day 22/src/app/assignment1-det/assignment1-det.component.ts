import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-assignment1-det',
  templateUrl: './assignment1-det.component.html',
  styleUrls: ['./assignment1-det.component.css']
})
export class Assignment1DetComponent implements OnInit {
  @Input('propUser') empData:any;
  constructor() { }

  ngOnInit(): void {
  }


}
