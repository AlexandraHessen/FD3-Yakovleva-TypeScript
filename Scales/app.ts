class Scales{

    ProductArr:Array<Product>

    constructor(){
        this.ProductArr=[];
    }

    add(_product:Product):void{
        this.ProductArr.push(_product)
    }

    getSumScale():number{
        let sumScale:number=0
        this.ProductArr.forEach((product:Product)=>{
             sumScale+=product.getScale()
        })
        return sumScale
    }

    getNameList():Array<string>{
        let nameListArr:Array<string>=[]
        this.ProductArr.forEach((product:Product)=>{
            nameListArr.push(product.getName())
        })
        return nameListArr
    }
}

class Product{

    name:string;
    weight:number;

    constructor(){
        this.name="";
        this.weight=0;
    }

    getScale():number{
        return this.weight
    }

    getName():string{
        return this.name
    }
}

class Apple extends Product{

    name:string="apple";

    constructor(_weight:number){
        super();
        this.weight=_weight;
    }
}

class Tomato extends Product{

    name:string="tomato";

    constructor(_weight:number){
        super();
        this.weight=_weight;
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


