"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcResultReducer = exports._calcResultReducer = void 0;
var store_1 = require("@ngrx/store");
var calc_result_action_1 = require("../actions/calc-result.action");
var calc_result_state_1 = require("../state/calc-result.state");
exports._calcResultReducer = store_1.createReducer(calc_result_state_1.initialCalcResultState, store_1.on(calc_result_action_1.addCalcResult, function (state, _a) {
    var calcResult = _a.calcResult;
    return (__assign(__assign({}, state), { calcResults: __spreadArray(__spreadArray([], state.calcResults), [calcResult]) }));
}));
function calcResultReducer(state, action) {
    return exports._calcResultReducer(state, action);
}
exports.calcResultReducer = calcResultReducer;
//# sourceMappingURL=calc-result.reducer.js.map