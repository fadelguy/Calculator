import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { error } from 'selenium-webdriver';
import { ICalcResponse } from '../../interface/calc-response.interface';
import { CalcService } from '../../services/calc.service';
import { addCalcResult } from '../../store/actions/calc-result.action';
import { ICalcResultState } from '../../store/state/calc-result.state';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  input: string;
  result: string;
  insertedOperator: boolean;
  operators: string[];
  isSuccessResult: boolean;

  constructor(private calcSrv: CalcService, private store: Store<{ calcResults: ICalcResultState }>) { }

  ngOnInit(): void {
    this.input = '';
    this.operators = ['/', '*', '-', '+'];
  }

  reset(): void {
    this.input = '';
    this.result = '';
    this.insertedOperator = false;
  }

  insertChar(num: string): void {
    if (this.isSuccessResult) {
      this.reset();
      this.isSuccessResult = false;
    }

    if (!this.validateChar(num)) {
      return;
    }

    this.input += num;
    this.insertedOperator = false;
  }

  execOperator(operator: string): void {

    if (this.validateOperator() && !this.insertedOperator) {
      this.input += operator;
      this.insertedOperator = true;
    }

  }

  remove(): void {
    this.input = this.input.slice(0, -1);
    this.insertedOperator = false;
  }

  getResult() {
    if (!this.validateCalculation()) {
      return;
    }
    
    this.calcSrv.getCalcResult(this.input).subscribe((response: ICalcResponse) => {
      this.isSuccessResult = true;
      if (response.isError) {
        this.result = response.description;
        return;
      }
      this.result = response.result;
      this.store.dispatch(addCalcResult({ calcResult: { input: this.input, result: response.result } }));
    }, error => { console.log(error) })

    
  }

  private validateChar(num: string): boolean {
    // don't start with 0 or .
    // after operator not allow 0 or .
    // not allow multi . in number
    if (this.input == '' && (num == '0' || num == '.') ||
      num == '0' && this.operators.includes(this.input[this.input.length - 1]) ||
      num == '.' &&
      (this.input[this.input.length - 1] == '.' ||
        this.operators.includes(this.input[this.input.length - 1]) ||
        this.splitMulti(this.input, this.operators).pop().includes('.'))) {
      return false;
    }

    return true;
  }

  private validateOperator(): boolean {
    // don't start with operator
    // now allow . after operator
    if (this.input == '' ||
      this.operators.includes(this.input[this.input.length - 1]) ||
      this.input[this.input.length - 1] == '.') {
      return false;
    }

    return true;
  }

  private validateCalculation(): boolean {
    if (!this.validateOperator() || this.input[this.input.length - 1] == '.') {
      return false;
    }

    return true;
  }

  private splitMulti(str: any, tokens: string[]): string[] {
    let tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
  }
}
