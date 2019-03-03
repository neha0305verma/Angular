import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CourcesComponent } from 'src/app/cources/cources.component';
import { FormComponent } from 'src/app/_Form/form/form.component';
import { PagenotfoundComponent } from 'src/app/_PageNotFound/pagenotfound/pagenotfound.component';
import { LoginComponent } from 'src/app/_Form/login/login.component';



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
    path:'login',
    component:LoginComponent
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
    RouterModule.forRoot(
      appRoute
    )
  ],
  declarations: []
})
export class ApprouteModule { }
