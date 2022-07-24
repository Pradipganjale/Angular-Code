import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  empData: any = [];
  frmClient: any;

  constructor(private client:Service1Service, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.LoadClient()
      this.frmClient = this.formBuilder.group({
        id: '',
        EmpName: '',
        Designation: '',
        status: ''
      })
      
    }
    
    LoadClient(){
      this.client.GetAllClient().subscribe(data => {
        this.empData = data;
        console.log(data);
    })
  }
  onSubmit() {
    console.log("form ", this.frmClient.value);
    const clientValue = this.frmClient.value;
    this.client.AddNewClient(clientValue).subscribe((data1: any) => {
      this.LoadClient();
    })
  }
  

}
