import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  private share=new BehaviorSubject("");
  currentName=this.share.asObservable(); 

  setShare(name:string){
    this.share.next(name);
  }
}
