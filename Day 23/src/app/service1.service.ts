import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }
  strURL:string = "http://localhost:3000/client";

  GetAllClient()
  {
    return this.http.get(this.strURL);
  }
  AddNewClient(client:any)
  {
    //client.id=122;
    //console.log("client ::"+JSON.stringify(client));
    return this.http.post(this.strURL,client);
  }

}
