// by default everything in javascript is passed by value. However, as long as the value is not replaced by another value, the same reference is used! When the value for a variable is replaced, a new place in memory is created for the new value, the old value however also remains. If there is no other variables pointing to that value in memory, it is collected by the garbage collector.

// a new value is saved in memory, and a new variable is created that points to this value in memory
var first = 'old value';

// a new variable is created, that points to the same value in memory
var second = first;

console.log(first === second);

// now we replace the old value with a new value in memory, and point the first variable towards it
first = 'new value';

// the second variable stil contains a reference to the old value!
console.log(second);

// until we remove last the reference to it, then it is collected by the garbage collector
second = undefined;

console.log(second);
