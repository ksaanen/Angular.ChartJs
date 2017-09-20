import { NgModule } from '@angular/core';
import { ChartJsComponent } from './chartjs.component';
import { ChartJsDataComponent } from './chartjs-data.component';
import { ChartJsAxesComponent } from './chartjs-axes.component';
import { ChartJsYAxisComponent } from './chartjs-yaxis.component';
import { ChartJsXAxisComponent } from './chartjs-xaxis.component';
import { ChartJsService } from './chartjs.service';

@NgModule({
  declarations: [
    ChartJsComponent,
    ChartJsDataComponent,
    ChartJsAxesComponent,
    ChartJsXAxisComponent,
    ChartJsYAxisComponent
  ],
  exports: [
    ChartJsComponent,
    ChartJsDataComponent,
    ChartJsAxesComponent,
    ChartJsXAxisComponent,
    ChartJsYAxisComponent
  ],
  providers: [
    ChartJsService
  ]
})
export class ChartJsModule {}
