import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MsgdisplayService {

  constructor(private data2:LoggerService) { }

  msgdisplay1(){
    
    return this.data2.LoggerData();
   
    
  }
}
