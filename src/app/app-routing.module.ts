import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ChartsjsComponent } from './chartsjs/chartsjs.component'
import { PlotlychartComponent} from './plotlychart/plotlychart.component'
import { EchartComponent} from './echart/echart.component'



const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'chartjs', component: ChartsjsComponent },
  { path: 'plotly', component: PlotlychartComponent },
  { path: 'echart', component: EchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
