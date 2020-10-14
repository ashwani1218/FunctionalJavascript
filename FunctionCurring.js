function multiply(a, b, c) {
  return a * b * c;
}

var two = multiply.bind(this, 2);
var three = two.bind(this, 2);
console.log(three(2));
