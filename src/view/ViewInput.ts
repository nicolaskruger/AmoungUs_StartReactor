import { View } from "./View"
import { Inputs } from "../model/Inputs"
export class ViewInput extends View{
    constructor(element:HTMLElement) {
        super(element);
    }
    template(models:Inputs){
        return `
            ${`<div class="ok"></div>`.repeat(models.cont.Cont)}
            ${`<div class="notOk"></div>`.repeat(5-models.cont.Cont)} 
        `
    }
}