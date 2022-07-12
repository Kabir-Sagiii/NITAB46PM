var arr = [30, 70, 100, 80, 20, 10, 75];

var newArray = arr.filter(function (ele, index) {
  return ele < 50;
});

console.log(newArray);
