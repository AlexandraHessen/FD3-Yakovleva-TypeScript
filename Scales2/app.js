var Scales = /** @class */ (function () {
    function Scales() {
        this.ProductArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.ProductArr.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.ProductArr.forEach(function (product) {
            sumScale += product.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameListArr = [];
        this.ProductArr.forEach(function (product) {
            nameListArr.push(product.getName());
        });
        return nameListArr;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_weight) {
        this.name = "apple";
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight) {
        this.name = "tomato";
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var scalesProduct = new Scales();
var apple1 = new Apple(950);
var tomato1 = new Tomato(150);
var tomato2 = new Tomato(320);
scalesProduct.add(apple1);
scalesProduct.add(tomato1);
scalesProduct.add(tomato2);
console.log("SumScale: " + scalesProduct.getSumScale());
console.log("NameList: " + scalesProduct.getNameList());
//# sourceMappingURL=app.js.map