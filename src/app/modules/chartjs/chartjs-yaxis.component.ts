import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { ChartJsService } from './chartjs.service';
import { ChartYAxe } from 'chart.js';

@Component({
  selector: 'chartjs-yaxis',
  template: ''
})

export class ChartJsYAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this.YAxis.id = value;
  }

  @Input()
  set stacked(value: boolean) {
    this.YAxis.stacked = value;
  }

  @Input()
  set display(value: boolean) {
    this.YAxis.display = value;
  }

  @Input()
  set max(value: number){
    this.YAxis.ticks.max = value;
  }

  @Input()
  set min(value: number){
    this.YAxis.ticks.min = value;
  }

  @Input()
  set showGridLines(value: boolean){
    this.YAxis.gridLines.display = value;
  }

  @Input()
  set scaleLabel(value: string){
    this.YAxis.scaleLabel.display = true;
    this.YAxis.scaleLabel.labelString = value;
  }

  private YAxis: ChartYAxe = {
    ticks: {},
    gridLines: {},
    scaleLabel: {}
  };

  constructor(private chartService: ChartJsService) {}

  ngAfterContentInit() {
    this.chartService.addYAxis(this.YAxis);
  }

  ngOnDestroy() {
    this.chartService.removeYAxis(this.YAxis);
  }
}
