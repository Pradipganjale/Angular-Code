import { Injectable } from '@angular/core';
import { Data2Service } from './data2.service';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private data2:Data2Service) { }

  displaydata2():string{
    const Result=this.data2.dataSer2();
    return Result; 
  }

  dataSer1(){
      return "data service 1";
  }

}
