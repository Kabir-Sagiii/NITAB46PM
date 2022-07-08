interface Person {
     pname:string 
     id:number 
     city:string

        display() : void ;

        changeName():void ;


}

  class Student implements Person {
      pname = "Rajiv"
      id:101 
      city = "Delhi"
    display():void {

         console.log(this.pname,this.id,this.city)
    }
      changeName(): void {
          this.pname = "Rahul"
      }
        changeCity():void {
            this.city = "Hyderabad"
        }
        
  }