"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signal_1 = require("./signal");
const random_1 = require("../helper/random");
const conter_1 = require("../helper/conter");
var states;
(function (states) {
    states[states["ligth"] = 0] = "ligth";
    states[states["clear"] = 1] = "clear";
    states[states["waitig"] = 2] = "waitig";
    states[states["next"] = 3] = "next";
    states[states["reset"] = 4] = "reset";
    states[states["finish"] = 5] = "finish";
})(states = exports.states || (exports.states = {}));
class Terminal {
    constructor() {
        this.state = states.ligth;
        this.terminal = new Array();
        this.orderVector = new Array();
        this.stateMachine = {
            0: this.ligth.bind(this),
            1: this.clear.bind(this),
            2: this.waiting.bind(this),
            3: this.next.bind(this),
            4: this.reset.bind(this),
            5: this.finish.bind(this)
        };
        this.c = new conter_1.Conter(1);
        this.cont = new conter_1.Conter(5);
        this.setOrderVector();
        for (let index = 0; index < 9; index++) {
            this.terminal.push(new signal_1.Signal());
        }
    }
    get Order() {
        return [...this.orderVector];
    }
    setCurrent(n) {
        this.setClear();
        this.terminal[n].setSelected();
    }
    setClear() {
        this.terminal.forEach(s => s.setNotSelected());
    }
    ligth() {
        this.setCurrent(this.orderVector[this.c.Cont]);
        this.c.next();
        this.state = states.clear;
    }
    clear() {
        this.setClear();
        if (this.c.Cont == this.c.Max)
            this.state = states.waitig;
        else
            this.state = states.ligth;
    }
    next() {
        this.c.resetMax(this.c.Max + 1);
        this.cont.next();
        if ((this.c.Max - 1) == this.cont.Max) {
            this.state = states.finish;
            return;
        }
        this.state = states.clear;
    }
    reset() {
        this.cont.reset();
        this.c.resetMax(1);
        this.setOrderVector();
        this.state = states.ligth;
    }
    waiting() {
    }
    finish() {
    }
    get Terminal() {
        return [...this.terminal];
    }
    setOrderVector() {
        let vet = [...Array(9).keys()];
        this.orderVector = [];
        for (let i = 0; i < 5; i++) {
            let val = vet[random_1.getRandomInt(0, vet.length)];
            vet = vet.filter(s => s != val);
            this.orderVector.push(val);
        }
    }
    tick() {
        this.stateMachine[this.state]();
    }
}
exports.Terminal = Terminal;
//# sourceMappingURL=terminal.js.map