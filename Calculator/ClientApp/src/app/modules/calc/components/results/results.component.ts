import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICalcResult } from '../../interface/calc-result.interface';
import { ICalcResultState } from '../../store/state/calc-result.state';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  calcResult: Observable<{ calcResults: ICalcResult[] }>;

  constructor(private store: Store<{ calcResults: ICalcResultState }>) { }

  ngOnInit(): void {
    this.calcResult = this.store.select('calcResults');
  }

}
