import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng-lts/table';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CalcComponent } from './components/calc/calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { calcResultReducer } from './store/resucers/calc-result.reducer';
import { ResultsComponent } from './components/results/results.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    CalcComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    StoreModule.forRoot({ calcResults: calcResultReducer }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
