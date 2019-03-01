import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
//form builder
registration=this.fb.group({
  name:['', Validators.required],
  email:[''],
  address:this.fb.group({
    city:[''],
    state:['']
  })
})
  oregistration = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      landmark:new FormControl('')
    })
  })
  constructor(private fb: FormBuilder ) { }
name=new FormControl('neha');
  ngOnInit() {
    //this.createForm();
    
  }
  createForm() {
    //console.log(this.registration.value.email);
    console.log(this.registration.value);
    console.log(this.registration.patchValue({
      email:'n@gmail',
      name:'nehaverma',
      address:{
        street:"patch"
      }
    }));
    // console.log(this.registration.setValue({
    //put all value })
    // );
    // setTimeout(()=>{
    //   this.name.setValue('ABC');
    // },10000);
  }
}
