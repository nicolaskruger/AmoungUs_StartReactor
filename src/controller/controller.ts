import {Terminal,states} from "../model/terminal";
import { View } from "../view/View";
import {ViewTerminal} from "../view/ViewTerminal";
import {ViewInput} from "../view/ViewInput";
import {Inputs} from "../model/Inputs";
import {Bind} from "../helper/Bind";

export class Controller {
    private $ = document.querySelector.bind(document);
    private btns:NodeListOf<Element>;
    private screens:NodeListOf<Element>;
    private viewTerminal:ViewTerminal = new ViewTerminal(this.$("#termina01"));
    private terminal:Terminal = Bind.create(new Terminal(),this.viewTerminal,"tick"); //new Terminal();
    private viewIput:ViewInput = new ViewInput(this.$("#input01"));
    private inputs = Bind.create(new Inputs(this.terminal),this.viewIput,"click","lastTick");
    constructor() {
        this.atlBtns();
        this.viewTerminal.set(this.terminal);
        setInterval(this.tick.bind(this),500);
    }
    private selected(i:number){
        this.inputs.click(i);
        setTimeout(()=>this.viewIput.set(this.inputs),500);
    }
    private atlBtns():void{
        this.atlButton(this.btns,".bt","click",this.selected);
    }
    private tick(){
        this.terminal.tick();
        if(this.terminal.state==states.finish){
            this.finish();
        }
    }
    private finish(){
        clearInterval(this.tick.bind(this));
        (this.$(".msg") as HTMLHRElement).classList.remove("inv");
    }
    private atlButton(elemnt:NodeListOf<Element>,query:string,event:string,func:(n:number)=>void):void{
        elemnt = document.querySelectorAll(query);
        for(let i = 0 ;i<elemnt.length;i++){
            elemnt[i].removeEventListener(event,func.bind(this,i));
            elemnt[i].addEventListener(event,func.bind(this,i));
        }
    }
}