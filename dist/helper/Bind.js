"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyFactory_1 = require("../service/ProxyFactory");
class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory_1.ProxyFactory.create(model, props, model => view.set(model));
        view.set(model);
        return proxy;
    }
    static create(model, view, ...props) {
        let proxy = ProxyFactory_1.ProxyFactory.create(model, props, model => view.set(model));
        view.set(model);
        return proxy;
    }
}
exports.Bind = Bind;
//# sourceMappingURL=Bind.js.map