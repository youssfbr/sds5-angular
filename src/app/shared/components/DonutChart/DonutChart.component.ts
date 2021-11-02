import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: ApexDataLabels;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};

@Component({
  selector: 'app-DonutChart',
  templateUrl: './DonutChart.component.html',
  styleUrls: ['./DonutChart.component.css'],
})
export class DonutChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [43.6, 67.1, 67.7, 45.6, 71.1],
      labels: ['Anakin', 'Bary Allen', 'Kal-El', 'Logan', 'Padmé'],
      legend: {
        show: true,
      },
      chart: {
        type: "donut",
        height: 240
      }
    };
  }

  ngOnInit() {}
}
