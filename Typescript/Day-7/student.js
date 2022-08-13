var student = {
  id: 101,
  name: 9999,
  email: "Raj@gmail.com",
  city: "Hyd",
  salary: 99.99,
};

console.log(student);

// Add new Property in Student Object   // <objname>.<propertykeyname> = "Value"
student.state = "TS";

console.log(student);

//Access Any Property Value  //  <objectname>.<keyname>

console.log(student.city);
console.log(student.name); //dot notation

console.log(student["name"]); //square bracket

//update the Property Value // <objectname>.<keyname> = "updated Value"

student.email = "RajVerma21@gmail.com";
console.log(student);

//delete Property   // delete <objectname>.<keyname>
delete student.id;
delete student.state;
console.log(student);
