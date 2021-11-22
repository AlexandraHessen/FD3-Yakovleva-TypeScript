class Scales{

    productsArr:Array<Products>

    constructor(){
        this.productsArr=[];
    }

    add(_product:Products):void{
        this.productsArr.push(_product)
    }

    getSumScale():number{
        let sumScale:number=0
        this.productsArr.forEach((product:Products)=>{
             sumScale+=product.getScale()
        })
        return sumScale
    }

    getNameList():string{
        let nameList:string=''
        this.productsArr.forEach((product:Products)=>{
            nameList+=' '+product.getName()
        })
        return nameList
    }
}

class Products{

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

class Apple extends Products{

    name:string="apple";

    constructor(_weight:number){
        super();
        this.weight=_weight;
    }
}

class Tomato extends Products{

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
console.log("NameList:"+scalesProduct.getNameList())


