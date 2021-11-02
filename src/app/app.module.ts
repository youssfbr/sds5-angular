import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './shared/components/nav/nav.component';
import { BarChartComponent } from './shared/components/BarChart/BarChart.component';
import { DonutChartComponent } from './shared/components/DonutChart/DonutChart.component';
import { DataTableComponent } from './shared/components/DataTable/DataTable.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BarChartComponent,
    DonutChartComponent,
    DataTableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
