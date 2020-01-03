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
    axisTitlesPosition: 'out',  
    legend: { position: 'bottom' },
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
       Luftdruck: { label: 'Luftdruck in mbar'} ,
       Temperatur: { label: 'Temperatur in °C' }
      }
    },
    series: {
      0: {axis: 'Luftdruck', color: '#0089D6'},
      1: {axis: 'Temperatur', color: '#00C960'}
    },
    // TODO: Funktioniert nicht... vielleicht nur mit dem Classic Graph?
    // explorer: { 
    //   actions: ['dragToZoom', 'rightClickToReset'],
    //   axis: 'horizontal',
    //   keepInBounds: true,
    //   maxZoomIn: 4.0
    // },
  };
  width = 800;
  height = 500;
  
  
  

  constructor(private luftdruckService: LuftdruckService) { }

  ngOnInit() {
    this.showSendordaten();
  }

  showSendordaten() {
    this.data = this.luftdruckService.getSensordaten().map(s => [s.timestamp, s.luftdruck, s.temperatur]);
  }
}
