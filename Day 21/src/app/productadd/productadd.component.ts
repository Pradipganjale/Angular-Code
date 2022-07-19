import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  @Output() EventproductUpdate = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {

   
  }

  onSubmit(frmproduct:any)
  {
    this.EventproductUpdate.emit(frmproduct.value);
    
  }
}
