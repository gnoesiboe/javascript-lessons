// Remember, when a variable copies another variable, they are both pointing to the same value in memory. That too is the case for objects. However, what happens when the object is not replaced by another value, but CHANGED? In this case the reference is kept, and both variables are still pointing to the same, chnaged value in memory.

// we create a value in memory and a new variable pointing towards it
var first = { someValue: 'value' };

// we create a second variable pointing to the same place in memory as the first
var second = first;

// but when we change the value..
first.someValue = 'anders';

// the second value is also changed!!
console.log(second);

// but when we completely replace the object, a new value in memory is created
first = { someValue: 'weer wat anders' };

// and the second variable still points to the old object
console.log(second);