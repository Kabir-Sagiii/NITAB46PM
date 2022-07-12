var product = {
  pname: "Macbook pro",
  price: 240000,
  qty: 5,
  totalAmount: function () {
    return this.price * this.qty;
  },
};

console.log(product.totalAmount());
