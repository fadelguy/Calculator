import { Route } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { CalcComponent } from './components/calc/calc.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'calc', component: CalcComponent },

]
