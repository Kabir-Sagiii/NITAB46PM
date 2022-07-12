var Student = /** @class */ (function () {
    function Student(name, city, id) {
        this.name = name;
        Student.city = city;
        this.id = id;
    }
    Student.prototype.display = function () {
        console.log(this.name, Student.city, this.id);
    };
    return Student;
}());
var s1 = new Student("Raj", "hyd", 101);
var s2 = new Student("Zoya", "hyd", 102);
s1.display();
s2.display();
Student.city = "Pune";
s1.name = "Rahul";
s1.display();
s2.display();
