import { View } from "./View";
import {Terminal} from "../model/terminal"
export class ViewTerminal extends View{
    template(models:Terminal){
        return `
        <div class="terminal__led">
        ${`<div class="ok"></div>`.repeat(models.cont.Cont)}
        ${`<div class="notOk"></div>`.repeat(models.cont.Max-models.cont.Cont)}
    </div>
    <div class="terminal__screen">
        ${models.Terminal.map(s=>`<div class="${s.Val}"></div>`).join('')}
        
    </div>
        `
    }
    constructor(element:HTMLElement) {
        super(element);
    }
    
}