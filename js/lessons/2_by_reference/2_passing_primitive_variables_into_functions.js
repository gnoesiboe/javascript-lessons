// when you pass primitive variables into functions, they are passed by value. Meaning that when you edit them, the original value is not altered

function someFunction(someArgument) {
  someArgument = 5;

  console.log('value within function: ', someArgument); // was altered to 5
}

var someValue = 4;
console.log('value before function call: ', someValue); // is equal to 4

someFunction(someValue);

console.log('value after function call: ', someValue); // is still equal to 4
