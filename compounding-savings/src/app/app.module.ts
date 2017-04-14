import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HeadingComponent } from './app.heading';
import { ChartComponent } from './app.chart';

@NgModule({
  declarations: [
    HeadingComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [
    HeadingComponent,
    ChartComponent
    ]
})
export class AppModule { }
