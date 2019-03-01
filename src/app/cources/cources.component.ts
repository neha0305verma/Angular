import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../service/simple-service.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  courses;
  //Dependency injection
  constructor(service:SimpleServiceService) {
   // let service = new SimpleServiceService();
    this.courses=service.getCources();
   }

  ngOnInit() {
  }

}
