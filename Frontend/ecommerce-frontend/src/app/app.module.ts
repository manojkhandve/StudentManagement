import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent, // Import AppComponent here
    StudentComponent // Import StudentComponent here
  ],
  bootstrap: [AppComponent] // Bootstrap the main AppComponent
})
export class AppModule { }