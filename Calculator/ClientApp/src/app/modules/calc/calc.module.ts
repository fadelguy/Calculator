import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng-lts/table';

import { CalcComponent } from './components/calc/calc.component';
import { ResultsComponent } from './components/results/results.component';
import { calcResultReducer } from './store/resucers/calc-result.reducer';
import { calcRoutes } from './calc.routes';

@NgModule({
  declarations: [
    CalcComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ calcResults: calcResultReducer }),
    RouterModule.forChild(calcRoutes),
    FormsModule,
    TableModule,
  ]
})
export class CalcModule { }
