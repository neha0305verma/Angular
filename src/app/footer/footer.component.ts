import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name:string;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.currentName.subscribe(data=>{this.name=data});
  }

  reset(){
    console.log("clicked");
    this.contentService.setShare("");
  }
  @Input()Name:string
  

}
