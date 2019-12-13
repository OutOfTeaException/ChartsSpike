import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ChartsjsComponent } from './chartsjs/chartsjs.component'



const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'chartjs', component: ChartsjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
