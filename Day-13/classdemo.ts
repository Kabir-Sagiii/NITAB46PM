 class Student {
   name:string;
   email:string;
   id:number;
   isPlaced:boolean 
   city:string


     displayDetails() : void {
       console.log(this.name,this.email,this.id,this.isPlaced,this.city)
        
     }

     }

       var s1 = new Student()
       s1.name = "Rahul"
       s1.email = "Rahul@gmail.com"
       s1.id = 101 
       s1.isPlaced = true
       s1.city = "hyderabad"
       s1.displayDetails()

       var s2 = new Student()
       s2.name = "Sneha"
       s2.id=102
       s2.city = "pune"
       s2.email = "Sneha@gmail.com"
       s2.isPlaced = true
       s2.displayDetails()
