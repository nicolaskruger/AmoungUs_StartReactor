export class ProxyFactory{
    static create(obj,props,acao){
        return new Proxy(obj,{
            get:function(target,prop,receive){
                if(props.includes(prop) && 
                        ProxyFactory.ehFuncao(target[prop])){
                    return function(){
                        Reflect.apply(target[prop],target,arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target,prop,receive);
            },
            set:function(target,prop,value,receive){
                
                
                Reflect.set(target,prop,value,receive);
                if(props.includes(prop)){
                 return acao(target);   
                }
                return true;
            }
        });
    }
    static ehFuncao(obj){
        return (typeof(obj)==typeof(Function));
    }
    
}