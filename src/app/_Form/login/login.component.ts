import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
    });
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  submit(){
    console.log("login");
  }

}
