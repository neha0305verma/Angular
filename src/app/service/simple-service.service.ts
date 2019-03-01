import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

response:string="response from simple-service";

private messageSource=new BehaviorSubject('default message');
currentMessage=this.messageSource.asObservable();
  constructor() { }

  getRequest() : string {
    return this.response;
  }

  changeMessage(message: string){
    this.messageSource.next(message);
  }

  getCources(){
    return ["course1","course2","course3"];
  }
}
