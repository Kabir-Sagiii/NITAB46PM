var Products = /** @class */ (function () {
    function Products(name, price, qty, isAvailable) {
        this.pname = name;
        this.price = price;
        this.qty = qty;
        this.isAvailable = isAvailable;
    }
    Products.prototype.display = function () {
        console.log(this.pname, this.price, this.qty, this.isAvailable);
    };
    return Products;
}());
var iphone13 = new Products("Iphone 13", 90000, 4, true);
var vivo = new Products("Vivo A23", 40000, 5, false);
iphone13.display();
vivo.display();
vivo.price = 35000;
vivo.display();
