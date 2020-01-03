import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { LuftdruckService } from '../luftdruck.service';
import * as moment from 'moment';

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
      type: 'time',
      axisLabel: {
        formatter: (function(value){
          return moment(value).format('DD.MM.YYYY HH:mm');
      })
    }
    //   formatter: function (value, index) {
    //     // Formatted to be month/day; display year only in the first label
    //     var date = new Date(value);
    //     var texts = date.getDate() + "." + (date.getMonth() + 1) + " " + date.getHours() + ":" + date.getMinutes();
    //     //if (index === 0) {
    //         //texts.push(date.getYear());
    //     //}
    //     return texts;
    // }
    },
    yAxis: [{
      name: 'Luftdruck (mbar)',
      type: 'value',
      scale: true,
      nameRotate: 90,
      nameLocation: 'middle',
      nameGap: 50,
      boundaryGap: ['10%', '10%'],
      axisLabel: {
      formatter:function (value, index) {
        let n = new Number(value);
        return n.toLocaleString();
      }
    }
    }, {
      name: 'Temperatur (°C)',
      type: 'value',
      scale: true,
      nameRotate: -90,
      nameLocation: 'middle',
      nameGap: 50,
      boundaryGap: ['10%', '10%'],
      axisLabel: {
        formatter:function (value, index) {
          let n = new Number(value);
          return n.toLocaleString();
        }
      }
    }],
    series: [{
      name: 'Luftdruck',
      data: this.luftdruckdatenY,
      type: 'line',
      showSymbol: false,
    },
    {
      name: 'Temperatur',
      data: this.temperaturdatenY,
      type: 'line',
      yAxisIndex: 1,
      showSymbol: false,
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
    formatter: function(params) {

      if (!params[0] && !params[0].data) {
        return;
      }

      let datum = params[0].data[0];
      let tooltip = `Datum: ${moment(datum).format('DD.MM.YYYY HH:mm')}<br/>`;

      if (params[0].data[1]) {
        setToolTip(params[0]);
        tooltip += "<br/>";
      }
      
      if (params[1] && params[1].data[1]) {
        setToolTip(params[1]);
      }

      function setToolTip(series) {
        if (series.seriesName == "Luftdruck") {
          tooltip += `Luftdruck: ${series.data[1].toLocaleString()} mbar`;
        }
        else if (series.seriesName == "Temperatur") {
          tooltip += `Temperatur: ${series.data[1].toLocaleString()} °C`;
        }
      }
      
      return tooltip;
    }
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
    let sensordata = this.luftdruckService.getSensordaten();

    sensordata.forEach(s => {
      this.luftdruckdatenY.push([s.timestamp, s.luftdruck]);
      this.temperaturdatenY.push([s.timestamp, s.temperatur]);
      this.datumX.push(s.timestamp);
    });
 }
}
