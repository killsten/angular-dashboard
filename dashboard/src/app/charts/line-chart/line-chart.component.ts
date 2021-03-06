import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartSampleData: any[] = [
    { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
    { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
    { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting' }
  ];

  LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  constructor() { }

  lineChartData = this.lineChartSampleData;
  lineChartLabels = this.LINE_CHART_LABELS;
  lineChartOptions: any = {
    response: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;


  ngOnInit() {
  }

}
