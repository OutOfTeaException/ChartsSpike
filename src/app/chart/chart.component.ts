import { Component, OnInit } from '@angular/core';
import { LuftdruckService } from '../luftdruck.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  title = 'Luftdruck';
  type = 'Line';
  data = [];
  columnNames = ['Datum', 'Luftdruck', 'Temperatur'];
  options = {
    hAxis: {
      title: "Datum",
      format: 'dd.MM.yyyy',
    //   titleTextStyle: {
    //     //color: '#01579b',
    //     fontSize: 20,
    //     fontName: 'Arial',
    //     bold: false,
    //     italic: false
    //  }
    },
    axes: {
      y: {
       // Gives each series an axis name that matches the Y-axis below.
       Luftdruck: {label: 'Luftdruck in mbar'},
       Temperatur: {label: 'Temperatur in °C'}
      }
    },
    series: {
      0: {axis: 'Luftdruck'},
      1: {axis: 'Temperatur'}
    },
    // TODO: Funktioniert nicht... vielleicht nur mit dem Classic Graph?
    // explorer: { 
    //   actions: ['dragToZoom', 'rightClickToReset'],
    //   axis: 'horizontal',
    //   keepInBounds: true,
    //   maxZoomIn: 4.0
    // },
  };
  width = 1000;
  height = 750;
  
  

  constructor(private luftdruckService: LuftdruckService) { }

  ngOnInit() {
    this.showSendordaten();
  }

  showSendordaten() {
    //this.data = this.luftdruckService.getSensordaten().map(s => [s.timestamp, s.luftdruck, s.temperatur]);
    this.data = this.luftdruckService.getMockSensordaten(100).map(s => [s.timestamp, s.luftdruck, s.temperatur]);
  }
}
