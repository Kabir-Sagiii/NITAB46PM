class Student {

     name:string 
    static city:string 
     id:number
       constructor(name:string,city:string,id:number) {
        this.name = name
       Student.city = city
        this.id = id
       }

       display():void {

      console.log(this.name,Student.city,this.id)

       }

          static changeCity() {
                 Student.city = "Mumbai"  
                
          }
}

var s1 = new Student("Raj","hyd",101) 
var s2 = new Student("Zoya","hyd",102)

s1.display() 
s2.display()

Student.city = "Pune"
s1.name = "Rahul"

s1.display() 
s2.display()


