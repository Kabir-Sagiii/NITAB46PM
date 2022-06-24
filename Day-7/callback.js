function add(a, b, fn, fn1) {
  fn();
  console.log(a + b);
  fn();
}

add(
  100,
  200,
  function () {
    console.log("I am Callback Function");
  },
  fn1
);

function fn1() {
  console.log("I am 2nd callback function");
}
