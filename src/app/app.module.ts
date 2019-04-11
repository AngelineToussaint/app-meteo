import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MzButtonModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MzButtonModule,
    MzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
