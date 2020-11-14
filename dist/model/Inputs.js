"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conter_1 = require("../helper/conter");
const terminal_1 = require("./terminal");
class Inputs {
    constructor(terminal) {
        this.cont = new conter_1.Conter(1);
        this.terminal = terminal;
    }
    click(n) {
        if (this.terminal.state != terminal_1.states.waitig)
            return;
        if (this.terminal.Order[this.cont.next()] == n) {
            if (this.cont.Cont == this.cont.Max) {
                this.terminal.state = terminal_1.states.next;
                setTimeout(() => this.cont.resetMax(this.cont.Max + 1), 200);
            }
        }
        else {
            this.cont.resetMax(1);
            this.terminal.state = terminal_1.states.reset;
        }
    }
    lastTick() {
    }
}
exports.Inputs = Inputs;
//# sourceMappingURL=Inputs.js.map