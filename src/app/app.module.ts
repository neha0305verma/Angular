import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './footer/content/content.component';
import { ResetComponent } from './footer/reset/reset.component';
import { HighlightDirective } from './highlight.directive';
import { CourcesComponent } from './cources/cources.component';
import { FormComponent } from './_Form/form/form.component';
import { ApprouteModule } from './_Route/approute/approute.module';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './_PageNotFound/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContentComponent,
    ResetComponent,
    HighlightDirective,
    CourcesComponent,
    FormComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ApprouteModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
