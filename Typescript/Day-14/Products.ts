class Products {
    pname:string  ;
    price:number;
    qty:number;
    isAvailable:boolean

      constructor(name:string,price:number,qty:number,isAvailable:boolean) {
      
      this.pname = name
      this.price = price
      this.qty = qty
      this.isAvailable = isAvailable

      }

       display() : void {
        console.log(this.pname,this.price,this.qty,this.isAvailable)
       }


}

   var iphone13 = new Products("Iphone 13",90000,4,true)

   var vivo = new Products("Vivo A23",40000,5,false)
   iphone13.display() 
   vivo.display()
   vivo.price = 35000;
vivo.display();