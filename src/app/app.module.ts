import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './chart/chart.component';

import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { ChartsjsComponent } from './chartsjs/chartsjs.component';
import { ChartsModule } from 'ng2-charts';
import { PlotlychartComponent } from './plotlychart/plotlychart.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { EchartComponent } from './echart/echart.component';
import { NgxEchartsModule } from 'ngx-echarts';

//PlotlyModule.plotlyjs = PlotlyJS;

registerLocaleData(localeDe, localeDeExtra);


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartsjsComponent,
    PlotlychartComponent,
    EchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    ChartsModule,
    NgxEchartsModule
    //PlotlyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
