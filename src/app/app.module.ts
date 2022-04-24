import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {FormsModule} from '@angular/forms';

import { StructuralDirectiveNgIfComponent } from './structural-directive-ng-if/structural-directive-ng-if.component';
import { StructuralDirectiveNgSwitchComponent } from './structural-directive-ng-switch/structural-directive-ng-switch.component';
import { StructuralDirectiveNgForComponent } from './structural-directive-ng-for/structural-directive-ng-for.component'

@NgModule({

  // declaration of component in declaration section
  declarations: [
    AppComponent,
    SampleComponent,
   StructuralDirectiveNgIfComponent,
   StructuralDirectiveNgSwitchComponent,
   StructuralDirectiveNgForComponent
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
