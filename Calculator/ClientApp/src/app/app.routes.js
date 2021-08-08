"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var home_component_1 = require("./components/home/home.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var calc_component_1 = require("./components/calc/calc.component");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'calc', component: calc_component_1.CalcComponent },
    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
];
//# sourceMappingURL=app.routes.js.map