var student = ["Rajiv", "Sneha", "Pooja", "KAran"];

console.log(student[2]);

var student = {
  name: "Pooja",
  marks: [70, 80, 90, 60],
};

console.log(student.marks[2]);

var student = {
  name: "Pooja",
  marks: [
    {
      sname: "MAths",
      score: 90,
    },
    {
      sname: "science",
      score: 80,
    },
  ],
};

console.log(student.marks[1].score);
