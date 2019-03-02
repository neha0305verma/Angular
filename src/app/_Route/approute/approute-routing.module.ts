import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import{CourcesComponent}from 'src/app/cources/cources.component';
import { FormComponent } from 'src/app/_Form/form/form.component';
import { PagenotfoundComponent } from 'src/app/_PageNotFound/pagenotfound/pagenotfound.component';


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
  imports: [RouterModule.forChild(appRoute),RouterModule.forRoot(
    appRoute
  ),],
  exports: [RouterModule]
})
export class ApprouteRoutingModule { }
