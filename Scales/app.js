var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product() {
        this.name = "";
        this.weight = 0;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_weight) {
        var _this = _super.call(this) || this;
        _this.name = "apple";
        _this.weight = _weight;
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight) {
        var _this = _super.call(this) || this;
        _this.name = "tomato";
        _this.weight = _weight;
        return _this;
    }
    return Tomato;
}(Product));
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