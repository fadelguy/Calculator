import { ICalcResult } from "../../interface/calc-result.interface";

export interface ICalcResultState {
  calcResults: ICalcResult[];
}
export const initialCalcResultState: ICalcResultState = {
  calcResults: []
};
