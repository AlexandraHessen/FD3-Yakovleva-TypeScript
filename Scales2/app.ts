class Scales{

    ProductArr:Array<IScalable>=[]

    add(_product:IScalable):void{
        this.ProductArr.push(_product)
    }

    getSumScale():number{
        let sumScale:number=0
        this.ProductArr.forEach((product:IScalable)=>{
             sumScale+=product.getScale()
        })
        return sumScale
    }

    getNameList():Array<string>{
        let nameListArr:Array<string>=[]
        this.ProductArr.forEach((product:IScalable)=>{
            nameListArr.push(product.getName())
        })
        return nameListArr
    }
}

interface IScalable{ // название interface начинать с буквы I + причастие/наречие (ремонтируемое)
    getScale():number;
    getName():string;
}


class Apple implements IScalable{

    name:string="apple";
    weight:number;

    constructor(_weight:number){
        this.weight=_weight;
    }

    getScale():number{
        return this.weight
    }

    getName():string{
        return this.name
    }

}

class Tomato implements IScalable{

    name:string="tomato";
    weight:number;

    constructor(_weight:number){
        this.weight=_weight;
    }

    getScale():number{
        return this.weight
    }

    getName():string{
        return this.name
    }

}

let scalesProduct:Scales=new Scales();

let apple1:Apple=new Apple(950);
let tomato1:Tomato=new Tomato(150);
let tomato2:Tomato=new Tomato(320);

scalesProduct.add(apple1);
scalesProduct.add(tomato1);
scalesProduct.add(tomato2);

console.log("SumScale: "+scalesProduct.getSumScale())
console.log("NameList: "+scalesProduct.getNameList())


