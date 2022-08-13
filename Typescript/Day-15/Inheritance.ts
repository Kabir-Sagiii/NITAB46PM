class Products {
     pname:string = ""
     category:string =""


     display(){
        console.log(this.pname,this.category)
     }
}

class MobileProduct extends Products  {
      
      price:number
      qty:number 
      
       print() {
        this.display()
        console.log(this.price,this.qty,)
       }

      
}


  class Menswearing extends Products {
      price:number 

      printData(){
        console.log(this.price,this.pname,this.category)
      }
  }

var m1 = new MobileProduct() 
 m1.pname = "Iphone 13"
 m1.category = "Electronics"
 m1.price = 90000 
 m1.qty = 10

 m1.print()