import { Route } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'calc', loadChildren: () => import('./modules/calc/calc.module').then(m => m.CalcModule) },

]
