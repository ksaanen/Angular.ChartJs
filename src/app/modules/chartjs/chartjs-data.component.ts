import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ChartJsService } from './chartjs.service';
import { ChartType, ChartPoint, ChartDataSets } from 'chart.js';

@Component({
  selector: 'chartjs-data',
  template: ''
})

export class ChartJsDataComponent implements OnInit, OnDestroy {
  @Input()
  set label(value: string) {
    this.dataSet.label = value;
  }

  @Input()
  set type(value: ChartType) {
    this.dataSet.type = value;
  }

  @Input()
  set data(value: number[] | ChartPoint[]) {
    this.dataSet.data = value;
  }

  @Input()
  set backgroundColor(value: string) {
    this.dataSet.backgroundColor = value;
  }

  @Input()
  set fill(value: number) {
    this.dataSet.fill = value;
  }

  @Input()
  set borderWidth(value: number) {
    this.dataSet.borderWidth = value;
  }

  @Input()
  set borderColor(value: string) {
    this.dataSet.borderColor = value;
  }

  @Input()
  set pointRadius(value: number) {
    this.dataSet.pointRadius = value;
  }

  @Input()
  set yAxisId(value: string) {
    this.dataSet.yAxisID = value;
  }

  private dataSet: ChartDataSets = {};

  constructor(private chartService: ChartJsService) {}

  ngOnInit() {
    this.chartService.addDataSet(this.dataSet);
  }

  ngOnDestroy() {
    this.chartService.removeDataSet(this.dataSet);
  }
}
