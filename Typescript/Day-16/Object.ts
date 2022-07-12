 interface IAddress {
     city:string,
     state:string,
     country:string
 }
 
 interface Person1  {
      name:string,
      id:number ,
      address:IAddress 
 }

   var student:Person1 = {
      name:"Rajiv",
      id:101,
      address : {
        city:"Pune",
        state:"MH",
        country:"India"
      }
     
   }


// var student = {
//     id:101,
//    name:"Rahul",
//    address :{
//     city:"Pune",
//     state:"MH"
//    }
   


// }

// student.id = "Rahul" //    type inference
//    student.email = "Rahul@gmail.com"

