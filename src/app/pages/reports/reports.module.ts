import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports/reports.component';
import {SharedModule} from '../../shared/shared.module';
import {ReportsRoutingModule} from './reports-routing.module';
import {ChartModule} from 'primeng/chart';

const imports = [
  ChartModule
];

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ...imports
  ]
})
export class ReportsModule { }
