# Angular ChartJS
(The Angular 2+ ChartJS wrapper-component)

## Installation
Copy chartjs folder from /src/app/ into project and run:

```
npm install chart.js --save
npm install @types/chart.js --save
```

## Sample
```html
<chartjs #myID3 [labels]="labels" type="bar" [config]="myChartConfig">
  <chartjs-axes>
    <chartjs-xaxis scaleLabel="bla" id="myXAxis" [showGridLines]="false" [stacked]="true"></chartjs-xaxis>
    <chartjs-yaxis scaleLabel="bla2" id="myYAxis" [min]="0" [max]="120" [display]="false"></chartjs-yaxis>
    <chartjs-yaxis scaleLabel="bla3" id="myYAxis2" [min]="0" [max]="120" [stacked]="true"></chartjs-yaxis>
  </chartjs-axes>

  <chartjs-data label="4" [data]="dataSet1" type="bar" backgroundColor="#815f86" yAxisId="myYAxis2"></chartjs-data>
  <chartjs-data label="1" [data]="dataSet2" type="bar" backgroundColor="#fff584" yAxisId="myYAxis2"></chartjs-data>
  <chartjs-data label="2" [data]="dataSet3" type="bar" backgroundColor="#f59695" yAxisId="myYAxis2"></chartjs-data>
    <chartjs-data *ngIf="show" label="Gewenst inkomen" [data]="dataSet5" pointRadius="0" borderColor="#815f86" backgroundColor="rgba(129,95,134,.2)" borderWidth="3" type="line" yAxisId="myYAxis"></chartjs-data>
  <chartjs-data *ngIf="show" label="Inkomen" [data]="dataSet6" pointRadius="0" borderColor="#815f86" backgroundColor="rgba(129,95,134,.2)" borderWidth="3" type="line" yAxisId="myYAxis"></chartjs-data>
</chartjs>
```

## chartjs-data
This is het child of a ```<chartjs>``` element. chartjs-data contains 1 set/type of data (array of numbers). Below is an example:
```html
<chartjs-data label="myLabel" [data]="graph.dataSet5" type="bar" backgroundColor="#815f86" yAxisId="myYAxis2"></chartjs-data>
```
### supported options

#### label:string
Label contains the name of the dataset.
#### [data]:array
Is an array of numbers containing the data values
#### type:string
The type of data, for now only "line" and "bar" have been tested.
Chartjs by default supports:
- line
- bar
- radar
- polar area
- doughnut and pie
- bubble


## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.