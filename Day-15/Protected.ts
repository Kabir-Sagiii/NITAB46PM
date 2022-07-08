class AProtected {
    protected name:string = "Sneha"

    display(){
        console.log(this.name)
    }
}

class AChild extends AProtected {

    constructor(){
        super()
        this.name = ""
    }

   
}

  var m = new AProtected() 
//   m.name = "Rohan"  // Cannot access outside the class
