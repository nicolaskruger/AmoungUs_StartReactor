"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_1 = require("../model/terminal");
const ViewTerminal_1 = require("../view/ViewTerminal");
const ViewInput_1 = require("../view/ViewInput");
const Inputs_1 = require("../model/Inputs");
const Bind_1 = require("../helper/Bind");
class Controller {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this.viewTerminal = new ViewTerminal_1.ViewTerminal(this.$("#termina01"));
        this.terminal = Bind_1.Bind.create(new terminal_1.Terminal(), this.viewTerminal, "tick"); //new Terminal();
        this.viewIput = new ViewInput_1.ViewInput(this.$("#input01"));
        this.inputs = Bind_1.Bind.create(new Inputs_1.Inputs(this.terminal), this.viewIput, "click", "lastTick");
        this.atlBtns();
        this.viewTerminal.set(this.terminal);
        setInterval(this.tick.bind(this), 500);
    }
    selected(i) {
        this.inputs.click(i);
        setTimeout(() => this.viewIput.set(this.inputs), 500);
    }
    atlBtns() {
        this.atlButton(this.btns, ".bt", "click", this.selected);
    }
    tick() {
        this.terminal.tick();
        if (this.terminal.state == terminal_1.states.finish) {
            this.finish();
        }
    }
    finish() {
        clearInterval(this.tick.bind(this));
        this.$(".msg").classList.remove("inv");
    }
    atlButton(elemnt, query, event, func) {
        elemnt = document.querySelectorAll(query);
        for (let i = 0; i < elemnt.length; i++) {
            elemnt[i].removeEventListener(event, func.bind(this, i));
            elemnt[i].addEventListener(event, func.bind(this, i));
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map