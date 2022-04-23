import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {FormsModule} from '@angular/forms'

@NgModule({

  // declaration of component in declaration section
  declarations: [
    AppComponent,
    SampleComponent
  ],

  // declaration of modules in import section
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
