// However, changing a property of an object referenced by a variable does change the underlying object!

// new variable points to new value in memory
var firstReference = {
  eerste: 'water'
};

// new variable points to already existing value in memory
var secondReference = firstReference;

// changes value in memory, and allocate a new place in memory!!
firstReference.eerste = 'anders';

// therefor the value that is referenced by the secondReference variable also points to the same object!
console.log(secondReference);
