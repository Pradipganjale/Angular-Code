import { Component, OnInit } from '@angular/core';

import { MsgdisplayService } from '../msgdisplay.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
Result:string="";
  constructor(private data3:MsgdisplayService) { }

  ngOnInit(): void {
   
    const Result3=this.data3.msgdisplay1();
    this.Result=Result3;
    
    
  
  }

}
