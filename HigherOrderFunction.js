// Higher Order Functions

const greetArugmentFunction = function () {
  return "Hello, ";
};

function sayGreetings(functionalParameter, name) {
  console.log(functionalParameter(), name);
}

sayGreetings(greetArugmentFunction, "Ashwani"); // Function invocation.

// Function Factories

function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("hello " + firstname + lastname);
    }
    if (language === "es") {
      console.log("hola " + firstname + lastname);
    }
  };
}

const greetEnglish = makeGreeting("en");

const greetSpanish = makeGreeting("es");

greetEnglish("Ashwani", "Pandey");
greetSpanish("Ashwani", "Pandey");
