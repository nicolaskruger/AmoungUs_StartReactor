export abstract class   View {
    protected element:HTMLElement;
    constructor(elemet:HTMLElement) {
        this.element = elemet;
    }
    protected abstract  template(models);
    public set(models){
        this.element.innerHTML= this.template(models);
    }
    
}