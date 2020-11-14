export class Conter {
    private cont = 0;
    private max:number;
    next(){
        if(this.cont<this.max) return this.cont++;
        return this.cont;
    }
    reset(){
        this.cont = 0;
    }
    resetMax(max:number){
        this.reset();
        this.max=max;
    }
    get Max(){return this.max;}
    get Cont(){return this.cont;}
    constructor(max:number) {
        this.max = max;
    }
}