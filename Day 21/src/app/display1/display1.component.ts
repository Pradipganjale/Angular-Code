import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  Result:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmClient:any)
  {
    if(frmClient.status==='VALID')
    {
      this.Result="Valid: Contact form Submitted";
    console.log("Contact form Submitted");
    }
    else
    {
      this.Result="Invalid: Contact form is Invaild"
      console.log("Contact form is Invalid");
    }
  }
}
