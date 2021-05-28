import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { SalesPersonClassComponent } from './sales-person-class/sales-person-class.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
    SalesPersonClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
