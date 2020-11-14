"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conter {
    constructor(max) {
        this.cont = 0;
        this.max = max;
    }
    next() {
        if (this.cont < this.max)
            return this.cont++;
        return this.cont;
    }
    reset() {
        this.cont = 0;
    }
    resetMax(max) {
        this.reset();
        this.max = max;
    }
    get Max() { return this.max; }
    get Cont() { return this.cont; }
}
exports.Conter = Conter;
//# sourceMappingURL=conter.js.map