"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxStatus = void 0;
var TxStatus;
(function (TxStatus) {
    TxStatus["Pending"] = "pending";
    TxStatus["Underpriced"] = "underpriced";
    TxStatus["Failure"] = "failure";
    TxStatus["Mined"] = "mined";
    TxStatus["Replaced"] = "replaced";
    TxStatus["Complete"] = "complete";
})(TxStatus = exports.TxStatus || (exports.TxStatus = {}));
var TxErrorReasons;
(function (TxErrorReasons) {
    TxErrorReasons["OutOfGas"] = "out of gas";
})(TxErrorReasons || (TxErrorReasons = {}));
//# sourceMappingURL=tx-status.enum.js.map