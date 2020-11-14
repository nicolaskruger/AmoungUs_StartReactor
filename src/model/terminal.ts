import {Signal} from "./signal";
import {getRandomInt} from "../helper/random";
import {Conter} from "../helper/conter";
export enum states{
    ligth = 0,
    clear,
    waitig,
    next,
    reset,
    finish,
}
export class Terminal {
    public state:states = states.ligth;
    private terminal:Signal[] = new Array<Signal>();
    private orderVector = new Array<number>();
    private stateMachine={
        0 : this.ligth.bind(this),
        1 : this.clear.bind(this),
        2 : this.waiting.bind(this),
        3 : this.next.bind(this),
        4 : this.reset.bind(this),
        5 : this.finish.bind(this)
    }
    get Order(){
        return [...this.orderVector];
    }
    c:Conter = new Conter(1);
    cont:Conter = new Conter(5);
    private setCurrent(n:number){
        this.setClear();
        this.terminal[n].setSelected();
    }
    private setClear(){
        this.terminal.forEach(s => s.setNotSelected());
    }
    private ligth() {   
        this.setCurrent(this.orderVector[this.c.Cont]);
        this.c.next();
        this.state = states.clear;
    }
    private clear(){
        this.setClear();
        if(this.c.Cont==this.c.Max)
            this.state = states.waitig;
        else
            this.state = states.ligth;
    }
    private next(){
        
        this.c.resetMax(this.c.Max+1);
        this.cont.next();
        if((this.c.Max-1)==this.cont.Max){
            this.state = states.finish;
            return ;
        }
        this.state = states.clear;
    }
    private reset(){
        this.cont.reset();
        this.c.resetMax(1);
        this.setOrderVector();
        this.state = states.ligth;
    }
    private waiting(){
        
    }
    private finish(){
    }
    get Terminal():Signal[]{
        return [...this.terminal];
    }
    constructor() {
        this.setOrderVector();
        for (let index = 0; index < 9; index++) {
            this.terminal.push(new Signal());
        }
    }
    private setOrderVector(){
        let vet = [...Array(9).keys()];
        this.orderVector = [];
        for (let i = 0; i < 5; i++) {
            let val = vet[getRandomInt(0,vet.length)];
            vet = vet.filter(s => s!=val);
            this.orderVector.push(val);
        }
    }
    public tick(){
        this.stateMachine[this.state]();
    }
    
}