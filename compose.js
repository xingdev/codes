async function a(next) {
  console.log("a is called");
  await next();
  console.log("a1 is called");
}
async function b(next) {
  console.log("b is called");
  await next();
  console.log("b1 is called");
}
async function c(next) {
  console.log("c is called");
  await next();
  console.log("c1 is called");
}

var fns = [a, b, c];
function compose(list) {
  next(0);
  function next(i) {
    const fn = list[i];
    if (fn) {
      Promise.resolve(fn(next.bind(null, i + 1)));
    }
  }
}

function compose() {
  next(0);
  function next(i) {
    const fn = list[i];
    if (fn) {
      fn(next.bind(null, i + 1));
    }
  }
}

compose(fns);
