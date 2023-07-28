"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divide = exports.Add = void 0;
function Add(x, y) {
    return x + y;
}
exports.Add = Add;
// one export default per module
function Multiply(x, y) {
    return x * y;
}
exports.default = Multiply;
function Divide(x, y) {
    return x / y;
}
exports.Divide = Divide;
