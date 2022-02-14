import {Component, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      top: 'bottom'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          {value: 1048, name: 'Android'},
          {value: 735, name: 'IOS'},
          {value: 580, name: 'MacOS'},
          {value: 484, name: 'Smart Fridge'},
          {value: 300, name: 'Windows'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

}
