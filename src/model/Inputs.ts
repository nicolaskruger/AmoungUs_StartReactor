import { Conter } from "../helper/conter"
import {Terminal,states} from "./terminal";
export class Inputs {
    public cont:Conter = new Conter(1);
    private terminal:Terminal;
    constructor(terminal:Terminal) {
        this.terminal = terminal;
    }
    click(n:number){
        if(this.terminal.state!=states.waitig) return;
        if(this.terminal.Order[this.cont.next()]==n){
            if(this.cont.Cont==this.cont.Max){
                this.terminal.state = states.next;
                setTimeout(()=>this.cont.resetMax(this.cont.Max+1),200);
            }
        }else{
            this.cont.resetMax(1);
            this.terminal.state = states.reset;
        }
    }
    private lastTick(){
        
    }
}