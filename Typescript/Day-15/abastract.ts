abstract class Emp {
    empname:string ="Rohan"

    changeName(name){
        this.empname = name
    }

  abstract  displayData()
  abstract changeCity()

}

 class Child extends Emp {
    city:string
   displayData() {
       console.log("Displaying " + this.empname)
   }
   changeCity() {
       this.city = "Mumbai"
   }
 }