class APublic {

   public name:string
  public display(){
    this.name = "Raj"
    console.log(this.name)
   }
}

class ChildA extends APublic {
    print(){
         this.name = "Rahul"
       this.display()
    }
}

  var a1 = new APublic()
  a1.name = "Riya"
  a1.display()