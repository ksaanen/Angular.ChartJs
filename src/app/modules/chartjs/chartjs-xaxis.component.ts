import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { ChartJsService } from './chartjs.service';
import { ChartXAxe } from 'chart.js';

@Component({
  selector: 'chartjs-xaxis',
  template: ''
})

export class ChartJsXAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this.XAxis.id = value;
  }

  @Input()
  set stacked(value: boolean) {
    this.XAxis.stacked = value;
  }

  @Input()
  set display(value: boolean) {
    this.XAxis.display = value;
  }

  @Input()
  set max(value: number){
    this.XAxis.ticks.max = value;
  }

  @Input()
  set min(value: number){
    this.XAxis.ticks.min = value;
  }

  @Input()
  set showGridLines(value: boolean){
    this.XAxis.gridLines.display = value;
  }

  @Input()
  set scaleLabel(value: string){
    this.XAxis.scaleLabel.display = true;
    this.XAxis.scaleLabel.labelString = value;
  }

  private XAxis: ChartXAxe = {
    ticks: {},
    gridLines: {},
    scaleLabel: {},
    barPercentage: 1,
    categoryPercentage: 0.9
  };

  constructor(private chartService: ChartJsService) {}

  ngAfterContentInit() {
    this.chartService.addXAxis(this.XAxis);
  }

  ngOnDestroy() {
    this.chartService.removeXAxis(this.XAxis);
  }
}
