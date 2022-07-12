class Products {
    constructor() {
        this.pname = "";
        this.category = "";
    }
    display() {
        console.log(this.pname, this.category);
    }
}
class MobileProduct extends Products {
    print() {
        this.display();
        console.log(this.price, this.qty);
    }
}
var m1 = new MobileProduct();
m1.pname = "Iphone 13";
m1.category = "Electronics";
m1.price = 90000;
m1.qty = 10;
m1.print();
