"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Signal {
    constructor() {
        this.val = ["selected", "notSelected"];
        this.curret = 1;
    }
    get Val() {
        return this.val[this.curret];
    }
    setSelected() {
        this.curret = 0;
    }
    setNotSelected() {
        this.curret = 1;
    }
}
exports.Signal = Signal;
//# sourceMappingURL=signal.js.map