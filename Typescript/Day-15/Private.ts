class APrivate {

    name:string = "Riya"
    private city:string = "Delhi"

    display(){
        this.city = "Hyderabad"
        console.log(this.city,this.name)
    }
}

class ChildPrivate extends APrivate {
      constructor() {
        super() 
        this.name = ""
        // this.city = ""  // cannot access 
      }
}
var a1private = new APrivate()
a1private.name = "Sneha"
// a1private.city = "Pune"  //cannot access