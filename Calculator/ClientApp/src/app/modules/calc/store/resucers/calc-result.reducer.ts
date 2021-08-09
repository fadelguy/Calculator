import { createReducer, on } from "@ngrx/store";
import { addCalcResult } from "../actions/calc-result.action";
import { initialCalcResultState } from "../state/calc-result.state";




export const _calcResultReducer = createReducer(
  initialCalcResultState,
  on(addCalcResult, (state, { calcResult }) => (
    { ...state, calcResults: [...state.calcResults, calcResult] }
  )),


)

export function calcResultReducer(state, action) {
  return _calcResultReducer(state, action);
}
