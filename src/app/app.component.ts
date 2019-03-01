import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SimpleServiceService } from './service/simple-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  name = 'neha';
  imgurl:string="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
  head:string="property binding";
  angularUrl : string;
  constructor(private response: SimpleServiceService){
    this.angularUrl="https://angular.io/tutorial";
  }
  displayData(){
    alert("hello"+this.response.getRequest());
    this.response.currentMessage.subscribe(data => {console.log(data)});
     this.response.changeMessage("Changed Massage"); 
    
  }
  myAlert(event){
    alert("The event is:"+this.response.getRequest());
  }
  
  @ViewChild(HeaderComponent) child;
  //name2=this.child.message //can not read message undefined
  //Second way to send message 
  // ngAfterViewInit(){
  //   this.name=this.child.message
  // }

}
