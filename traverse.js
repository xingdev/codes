function a(next) {
  console.log("a is called");
  next();
  console.log("a1 is called");
}
function b(next) {
  console.log("b is called");
  next();
  console.log("b1 is called");
}
function c(next) {
  console.log("c is called");
  next();
  console.log("c1 is called");
}

var fns = [a, b, c];
function compose(list) {
  next(0);
  function next(i) {
    const fn = list[i];
    if (fn) {
      fn(next.bind(null, i + 1));
    }
  }
}

compose(fns);
