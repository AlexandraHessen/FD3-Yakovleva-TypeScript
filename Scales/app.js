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
        this.productsArr = [];
    }
    Scales.prototype.add = function (_product) {
        this.productsArr.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.productsArr.forEach(function (product) {
            sumScale += product.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = '';
        this.productsArr.forEach(function (product) {
            nameList += ' ' + product.getName();
        });
        return nameList;
    };
    return Scales;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.name = "";
        this.weight = 0;
    }
    Products.prototype.getScale = function () {
        return this.weight;
    };
    Products.prototype.getName = function () {
        return this.name;
    };
    return Products;
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
}(Products));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight) {
        var _this = _super.call(this) || this;
        _this.name = "tomato";
        _this.weight = _weight;
        return _this;
    }
    return Tomato;
}(Products));
var scalesProduct = new Scales();
var apple1 = new Apple(950);
var tomato1 = new Tomato(150);
var tomato2 = new Tomato(320);
scalesProduct.add(apple1);
scalesProduct.add(tomato1);
scalesProduct.add(tomato2);
console.log("SumScale: " + scalesProduct.getSumScale());
console.log("NameList:" + scalesProduct.getNameList());
//# sourceMappingURL=app.js.map