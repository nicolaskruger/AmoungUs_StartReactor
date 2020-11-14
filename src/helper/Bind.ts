import {ProxyFactory} from '../service/ProxyFactory' 
import {View} from '../view/View';

export class Bind {
    
    constructor(model, view:View, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.set(model));
            
        view.set(model);
        
        return proxy;
    }
    static create(model, view:View, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.set(model));
            
        view.set(model);
        
        return proxy;
    }
}