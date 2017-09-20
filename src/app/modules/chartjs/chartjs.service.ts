import { Injectable } from '@angular/core';
import { ChartDataSets, ChartConfiguration, Chart, ChartYAxe, ChartXAxe } from 'chart.js';

@Injectable()
export class ChartJsService {
  private chart: Chart;
  private chartType: Chart.ChartType;
  private options: Chart.ChartOptions = {
    scales: {
      xAxes: [],
      yAxes: []
    }
  };
  private chartData: Chart.ChartData = {
    labels: [],
    datasets: [],
  };

  initChart(context: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>) {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(context, this.getChartConfiguration());
  }

  addXAxis(xAxe: ChartXAxe) {
    this.options.scales.xAxes.push(xAxe);
    this.updateChart();
  }

  addYAxis(yAxe: ChartYAxe) {
    this.options.scales.yAxes.push(yAxe);
    this.updateChart();
  }

  removeXAxis(xAxe: ChartXAxe) {
    const index = this.options.scales.xAxes.indexOf(xAxe);
    if (index > -1) {
      this.options.scales.xAxes.splice(index, 1);
    }
    this.updateChart();
  }

  removeYAxis(yAxe: ChartYAxe) {
    const index = this.options.scales.yAxes.indexOf(yAxe);
    if (index > -1) {
      this.options.scales.yAxes.splice(index, 1);
    }
    this.updateChart();
  }

  addDataSet(dataSet: ChartDataSets) {
    this.chartData.datasets.push(dataSet);
    this.updateChart();
  }

  removeDataSet(dataSet: ChartDataSets) {
    const index = this.chartData.datasets.indexOf(dataSet);
    if (index > -1) {
      this.chartData.datasets.splice(index, 1);
    }
    this.updateChart();
  }

  set labels(labels: (string | string[])[]) {
    this.chartData.labels = labels;
    this.updateChart();
  }

  set type(type: Chart.ChartType) {
    this.chartType = type;
    this.updateChart();
  }

  set config(value: Object) {
    Object.assign(this.options, value);
  }

  private updateChart() {
    if (this.chart) {
      this.chart.update();
    }
  }

  private getChartConfiguration(): ChartConfiguration {
    return {
      type: this.chartType,
      data: this.chartData,
      options: this.options
    };
  }

}
