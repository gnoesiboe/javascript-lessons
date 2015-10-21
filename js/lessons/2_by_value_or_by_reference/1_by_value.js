// by default everything in javascript is passed by value. However, as long as the value is not replaced by another value, the same reference in memory is used! When the value for a variable is replaced, a new place in memory is created for the new value, the old value however also remains, until there are no other variables pointing to it, than it wil be collected by the garbage collector.

// a new value is saved in memory, and a new variable is created that points to this value in memory
var first = 'old value';

// a new variable is created, that points to THE SAME place in memory as the first variable
var second = first;

// 'first' and 'second' are exactly the same
console.log(first === second);

// now we ad a new value to memory, and point the first variable towards it
first = 'new value';

// the second variable however stil contains a reference to the old value!
console.log(second);

// until we remove last the reference to it, then it is collected by the garbage collector..
