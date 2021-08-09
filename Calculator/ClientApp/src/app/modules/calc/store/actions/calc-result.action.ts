import { createAction, props } from '@ngrx/store';
import { ICalcResult } from '../../interface/calc-result.interface';

export enum ECalcResultActions {
  AddCalcResult = '[CalcResult] Add CalcResult',
}


export const addCalcResult = createAction(
  ECalcResultActions.AddCalcResult,
  props<{ calcResult: ICalcResult }>()
);



