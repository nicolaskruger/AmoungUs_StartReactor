"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewInput extends View_1.View {
    constructor(element) {
        super(element);
    }
    template(models) {
        return `
            ${`<div class="ok"></div>`.repeat(models.cont.Cont)}
            ${`<div class="notOk"></div>`.repeat(5 - models.cont.Cont)} 
        `;
    }
}
exports.ViewInput = ViewInput;
//# sourceMappingURL=ViewInput.js.map