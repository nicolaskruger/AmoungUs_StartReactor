"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewTerminal extends View_1.View {
    template(models) {
        return `
        <div class="terminal__led">
        ${`<div class="ok"></div>`.repeat(models.cont.Cont)}
        ${`<div class="notOk"></div>`.repeat(models.cont.Max - models.cont.Cont)}
    </div>
    <div class="terminal__screen">
        ${models.Terminal.map(s => `<div class="${s.Val}"></div>`).join('')}
        
    </div>
        `;
    }
    constructor(element) {
        super(element);
    }
}
exports.ViewTerminal = ViewTerminal;
//# sourceMappingURL=ViewTerminal.js.map