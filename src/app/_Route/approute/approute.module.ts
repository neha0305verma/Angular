import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CourcesComponent } from 'src/app/cources/cources.component';
import { FormComponent } from 'src/app/_Form/form/form.component';



const appRoute: Routes=[
  {
    path: 'home',
    component: AppComponent
  },
  {
    path:'cources',
    component: CourcesComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }


]

@NgModule({
  imports: [    
    CommonModule,
   
  ],
  declarations: []
})
export class ApprouteModule { }
