class StudentP {
    name:string 
    city:string 

    constructor(){
        this.name = "Student"
        this.city = "City"
    }

    display(){
        console.log(this.name,this.city)
    }
}

class NIT extends StudentP {
      email:string 
      isPlaced:boolean 

      constructor(){
           super()//call the constructor of Parent Class
         this.email = ""
        
         this.isPlaced = false
         
      }
}