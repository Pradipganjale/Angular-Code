import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  frmContact: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmContact = this.formBuilder.group(
      {
        fullname: '',
        roles: this.formBuilder.array([])
      }
    )
  }
  get roles(): FormArray {
    return this.frmContact.get("roles") as FormArray
  }

  newRole(): FormGroup {
    return this.formBuilder.group(
      {
        role: '',
       
      }
    )
  }
  addroles()
  {
    this.roles.push(this.newRole());
  }
  removerole(i:number)
  {
    this.roles.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmContact.value)
  }

}
