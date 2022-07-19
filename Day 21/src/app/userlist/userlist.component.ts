import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userData:any=[];
  selecteduserId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.userData=[
      {userId:1,userName:"Prashant",userStatus:"Active",roleAssign:"Developer"},
      {userId:2,userName:"sagar",userStatus:"Disable",roleAssign:"Tester"},
      {userId:3,userName:"kamal",userStatus:"Active",roleAssign:"Manager"},
      {userId:4,userName:"Samir",userStatus:"Disable",roleAssign:"Full Stack Developer"},
      {userId:5,userName:"Rohit",userStatus:"Active",roleAssign:"Angular Developer"}
  ]
  }
  onDetails(selectedId:number)
  {
      this.selecteduserId = selectedId;
  }
}
