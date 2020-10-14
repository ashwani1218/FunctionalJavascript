// Normal Function.
function greet() {
  console.log("Hello!");
}
greet(); // Function invocation.

// Assigning to a variable
let greeting = function () {
  console.log("Hello, I was assigned to a variable.");
};

greeting(); // Function invocation.

// Passing functions as an Argument.

let greetArugmentFunction = function () {
  return "Hello, ";
};

function sayGreetings(functionalParameter, name) {
  console.log(functionalParameter(), name);
}

sayGreetings(greetArugmentFunction, "Ashwani"); // Function invocation.

// Function returning another Function.

function greetings() {
  return function () {
    console.log("Hello!");
  };
}

let greetingsFunction = greetings(); // Function invocation.
greetingsFunction(); // Inner Function invocation.
