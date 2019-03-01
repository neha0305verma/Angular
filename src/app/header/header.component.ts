import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message : string="child message";
  name :string;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.currentName.subscribe(data=>{this.name=data});
  }

  @Input()Name:String
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(event){
    this.messageEvent.emit("Message from child "+event);
  }

  

}
