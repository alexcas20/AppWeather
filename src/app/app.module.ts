import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ConversorGradosPipe } from './pipes/conversor-grados.pipe'
import { FormsModule } from '@angular/forms';
import { DateTimePipe } from './pipes/date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConversorGradosPipe,
    DateTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
