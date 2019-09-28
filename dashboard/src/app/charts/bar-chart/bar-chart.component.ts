import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  sampleBarChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
    { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Series' }
  ]

  sampleBarChartLabels: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

  constructor() { }

  public barChartData: any[] = this.sampleBarChartData;
  public barChartLabels: string[] = this.sampleBarChartLabels;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    response: true
  }

  ngOnInit() {
  }

}
