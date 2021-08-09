import { Route } from "@angular/router";
import { CalcComponent } from './components/calc/calc.component';

export const calcRoutes: Route[] = [
  { path: '', component: CalcComponent, pathMatch: 'full'},

]
