import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { LuftdruckService } from '../luftdruck.service';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {

  private luftdruckdatenY = [];
  private temperaturdatenY = [];
  private datumX = [];

  constructor(private luftdruckService: LuftdruckService) { }

  ngOnInit() {
    this.showSensordaten();
  }

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: this.datumX,
      axisLabel: {
      formatter: function (value, index) {
        // Formatted to be month/day; display year only in the first label
        var date = new Date(value);
        var texts = date.getDate() + "." + (date.getMonth() + 1) + " " + date.getHours() + ":" + date.getMinutes();
        //if (index === 0) {
            //texts.push(date.getYear());
        //}
        return texts;
    }
      }
    },
    yAxis: [{
      name: 'Luftdruck',
      type: 'value',
      //min: 800
    }, {
      name: 'Temperatur',
      type: 'value',
     // min: 10
    }],
    series: [{
      name: 'Luftdruck',
      data: this.luftdruckdatenY ,
      type: 'line'
    },
    {
      name: 'Temperatur',
      data: this.temperaturdatenY,
      type: 'line',
      yAxisIndex: 1
    }],
    legend: {
      data: ['Luftdruck','Temperatur']
      //x: 'left'
  },
  dataZoom: [
      {
          show: true,
          realtime: true,
          //start: 65,
          //end: 85
      },
      {
          type: 'inside',
          realtime: true,
          //start: 65,
          //end: 85
      }
  ],
  tooltip : {
    trigger: 'axis',
       // axisPointer: {
    //     type: 'cross',
    //     animation: false,
    //     label: {
    //         backgroundColor: '#505765'
    //     }
    // }
},
}
  

  showSensordaten() {
    let sensordata = this.luftdruckService.getMockSensordaten(100);

    sensordata.forEach(s => {
      this.luftdruckdatenY.push(s.luftdruck);
      this.temperaturdatenY.push(s.temperatur);
      this.datumX.push(s.timestamp);
    });
 }
}
