import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
