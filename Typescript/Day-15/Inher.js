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
var Products = /** @class */ (function () {
    function Products() {
        this.pname = "";
        this.category = "";
    }
    Products.prototype.display = function () {
        console.log(this.pname, this.category);
    };
    return Products;
}());
var MobileProduct = /** @class */ (function (_super) {
    __extends(MobileProduct, _super);
    function MobileProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileProduct.prototype.print = function () {
        this.display();
        console.log(this.price, this.qty);
    };
    return MobileProduct;
}(Products));
var m1 = new MobileProduct();
m1.pname = "Iphone 13";
m1.category = "Electronics";
m1.price = 90000;
m1.qty = 10;
m1.print();
