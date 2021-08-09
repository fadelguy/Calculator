"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCalcResult = exports.ECalcResultActions = void 0;
var store_1 = require("@ngrx/store");
var ECalcResultActions;
(function (ECalcResultActions) {
    ECalcResultActions["AddCalcResult"] = "[CalcResult] Add CalcResult";
})(ECalcResultActions = exports.ECalcResultActions || (exports.ECalcResultActions = {}));
exports.addCalcResult = store_1.createAction(ECalcResultActions.AddCalcResult, store_1.props());
//# sourceMappingURL=calc-result.action.js.map