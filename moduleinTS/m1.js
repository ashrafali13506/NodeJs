"use strict";
exports.__esModule = true;
exports.TaxCalculator = exports.FareCalculator = void 0;
function FareCalculator(distance, count) {
    console.log("In Fare Calculator");
    return distance * 14 / count * 10;
}
exports.FareCalculator = FareCalculator;
function TaxCalculator(earning, years) {
    return earning * 5 / 100 + years / 10;
}
exports.TaxCalculator = TaxCalculator;
