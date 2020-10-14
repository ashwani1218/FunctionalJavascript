function multiply(a, b, c) {
  return a * b * c;
}

const two = multiply.bind(this, 2);
const three = two.bind(this, 2);
console.log(three(2));
