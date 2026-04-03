// 1. Arrow function to return the sum of two inputs
const sum = (a, b) => a + b;
console.log("Sum:", sum(5, 3));

// 2. Arrow function to return the square of an input
const square = (n) => n * n;
console.log("Square:", square(4));

// 3. Arrow function to print "Hello World!"
const helloWorld = () => console.log("Hello World!");
helloWorld();

// 4. Arrow function to print "HI" along with the user's name
const greetUser = (name) => console.log(`HI ${name}`);
greetUser("Alice");

// 5. Arrow function to multiply two inputs, store in a variable, and print it
const multiply = (a, b) => {
  const result = a * b;
  console.log("Multiplication :", result);
};
multiply(6, 7);