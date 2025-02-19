const a = 1;
const b = true;
const c = "Pretty";

let d = 1;
let e = true;
let f = "Pretty";

let reg = /[a-z]+/g

export class App {
    public num: number;
    public str: string;
    public bool: boolean;

    public operate() {
        this.num + 1;
        this.num - 1;
        this.num++
    }

    constructor() {
        this.num = 0;
        this.str = "Hello World!";
        this.bool = false;
    }

    public getNum(): number {
        return this.num;
    }

    public getStr(): string {
        return this.str.toString();
    }

    /**
     * @param {number} num 
     */
    public setNum(num: number): void {
        this.num = num;
    }

    public nestBrackets() {
        if(true) {
            if(!false) {
                if(this.num) {
                    if("w" === "w") {

                    }
                }
            }
        }
    }
}