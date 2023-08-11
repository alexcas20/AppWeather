import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ConversorGradosPipe } from './pipes/conversor-grados.pipe'
import { FormsModule } from '@angular/forms';
import { DateTimePipe } from './pipes/date-time.pipe';
import { CardInfoComponent } from './card-info/card-info.component';
import { WindtoKmPipe } from './pipes/windto-km.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConversorGradosPipe,
    DateTimePipe,
    CardInfoComponent,
    WindtoKmPipe
   
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
