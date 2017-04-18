import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { HeadingComponent } from './app.heading';
import { ChartComponent } from './app.chart';
//import { InfoBoxComponent } from './app.infobox';
import { SidemenuComponent } from './app.sidemenu';

@NgModule({
  declarations: [
    HeadingComponent,
    ChartComponent,
    //InfoBoxComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [
    HeadingComponent,
    ChartComponent,
    //InfoBoxComponent,
    SidemenuComponent
    ]
})
export class AppModule { }
