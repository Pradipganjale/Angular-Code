import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
frmContact:any;
  constructor() { }

  ngOnInit(): void {

  this.frmContact = new FormGroup(
    {
    id : new FormControl(""),
    Cname : new FormControl(""),
    add : new FormControl(""),
    pin :new FormControl("")

  }) 
  }
  onSubmit(ContactForm: any) {
    console.log(ContactForm);
  }

}
