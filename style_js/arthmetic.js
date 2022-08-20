const PI = 3.1416;
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const myObject = {
  PI,
  add,
  sub,
  mul,
  div,
}
exports.arthmetic = myObject;
