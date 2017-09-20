import { Component, Input, ElementRef, AfterContentInit } from '@angular/core';
import { ChartType, Chart } from 'chart.js';
import { ChartJsService } from './chartjs.service';

@Component({
  selector: 'chartjs',
  template: '<div><canvas></canvas></div>',
  providers: [ChartJsService]
})
export class ChartJsComponent implements AfterContentInit {

  @Input()
  set labels(value: (string | string[])[]) {
    this.chartService.labels = value;
  }

  @Input()
  set type(value: ChartType) {
    this.chartService.type = value;
  }

  @Input()
  set config(value: Object) {
    this.chartService.config = value;
  }

  constructor(private elementRef: ElementRef, private chartService: ChartJsService) {}

  ngAfterContentInit() {
    const ctx: any = this.elementRef.nativeElement.querySelector('canvas').getContext('2d');
    this.chartService.initChart(ctx);
  }
}
