import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnChanges {
  ngOnChanges(changes: any): void {
    console.log("äsd");
    this.contentservice.setShare(name);
  }
  name:string;
  constructor(private contentservice:ContentService) { }

  //@Input('name') Name:String;
  
  ngOnInit() {
    this.contentservice.currentName.subscribe(data=>{this.name=data});
  }
  onChange(){
    console.log("change");
    this.contentservice.setShare(this.name);
  }
}
