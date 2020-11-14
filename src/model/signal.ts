
export class Signal{
    private val = ["selected","notSelected"];
    private curret = 1;

    constructor(){

    }
    get Val(){
        return this.val[this.curret];
    }
    setSelected(){
        this.curret =0;
    }
    setNotSelected(){
        this.curret =1;
    }
}