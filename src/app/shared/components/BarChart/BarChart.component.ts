import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
 // ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
 // dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-BarChart',
  templateUrl: './BarChart.component.html',
  styleUrls: ['./BarChart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "% Sucesso",
          data: [43.6, 67.1, 67.7, 45.6, 71.1]
        }
      ],
      chart: {
        type: "bar",
        height: 240
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Anakin",
          "Bary Allen",
          "Kal-El",
          "Logan",
          "Padmé"
        ]
      }
    };
  }

  ngOnInit() {
  }

}
