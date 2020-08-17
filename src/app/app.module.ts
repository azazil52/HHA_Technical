import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ApiConnectService } from './api-connect.service';

import { AppComponent } from './app.component';   

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
