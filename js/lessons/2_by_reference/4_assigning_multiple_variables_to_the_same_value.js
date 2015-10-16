// when you create a value and assign it to a variable, that value is put in memory somewhere. As long as it is pointed to by a variable it is not thrown away by the garbage collector. 
// when you assign another value to the variable, the original value is kept when still point to by another object

var first = 3; // sets the value '3' into memory with the variable 'first' pointing to it

var second = first; // points the 'second' variable to the value in memory of the 'first' variable

console.log('value of first: ', first);
console.log('value of second: ', second);
console.log('first equals second', first === second);

first = 8; // creates a new space in memory, stores the value '8' there and points the first variable to it

console.log('current first value: ', first);
console.log('current second value: ', second); // second still points to the previous value of 'first'!!!