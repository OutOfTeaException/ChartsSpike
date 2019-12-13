import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import 'chartjs-plugin-zoom';
import { LuftdruckService } from '../luftdruck.service';

@Component({
  selector: 'app-chartsjs',
  templateUrl: './chartsjs.component.html',
  styleUrls: ['./chartsjs.component.css']
})
export class ChartsjsComponent implements OnInit {

  private luftdruckdatenY = [];
  private temperaturdatenY = [];
  private datumX = [];

  constructor(private luftdruckService: LuftdruckService) { }

  ngOnInit() {
    this.showSensordaten();
  }

  public lineChartLegend = true;
  public lineChartType = 'line';

  public lineChartData: ChartDataSets[] = [
     { data: this.luftdruckdatenY, label: 'Luftdruck', yAxisID: 'A', fill: false},
     { data: this.temperaturdatenY, label: 'Temperatur', yAxisID: 'B', fill: false },
     //{ data: this.datumX, label: 'Messzeitpunkt' }
  ];

  public lineChartLabels: Label[] = this.datumX;

  //public lineChartOptions: (ChartOptions & { annotation: any }) = {
    public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        scaleLabel: {
            display: true,
            labelString: 'Messzeitpunkt'
        },
        time: {
          displayFormats: {
              quarter: 'dd.MM.YYYY '
          }
      }
      }],
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        display: true,
        scaleLabel: {
            display: true,
            labelString: 'Luftdruck mbar'
        },
        ticks: {
            min: 1010,
            max: 1035
          }
        },
      {
        id: 'B',
        type: 'linear',
        position: 'right',
        display: true,
        scaleLabel: {
            display: true,
            labelString: 'Raum G207 / °C'
        },
        ticks: {
            min: 23,
            max: 27
        }
      }]
    },
    plugins: {
        zoom: {
            pan: {
               enabled: true,
               mode: 'xy'
            },
            zoom: {
                drag: false,
                enabled: true,
                mode: 'xy'
            }
        }
    }
  };

  showSensordaten() {
     let sensordata = this.luftdruckService.getMockSensordaten(100);

     sensordata.forEach(s => {
       this.luftdruckdatenY.push(s.luftdruck);
       this.temperaturdatenY.push(s.temperatur);
       this.datumX.push(s.timestamp);
     });
  }
}
