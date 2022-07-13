import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../employees/data2.service';


@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
Result:string=""; 
  constructor(private data:Data2Service) { }

  ngOnInit(): void {
    const Result2=this.data.display();
    this.Result=Result2;
  }

}
