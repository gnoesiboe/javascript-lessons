// Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a place in memory.

// create a new object in memory, and have the variable 'someObject' contain a reference to it
var someObject = {
    someValue: 'test'
};

// add a new variable and also have it point to the same value in memory as, 'someObject'
var someOtherObject = someObject;

// we create a NEW value in memory and have the existing variable 'someObject' reference it
someObject = 3;

// someOtherObject still points to the value in memory containing the initial object!!
console.log('someOtherObject still contains the original object: ', someOtherObject);

// When there are no more variables pointing to a value in memory, the garbage collector removes it.

delete someObject;
delete someOtherObject;


// -------------------------------------------
console.log('\n---------------\n');


// when using functions, it works exactly the same. The method argument is a new variable that is pointed to the same value in memory. When the method argument's value is changed, the original variable still points to the old value in memory


var someFunction = function (otherReference) {
    otherReference = 'other value';

    // other reference now points to a new value in memory
    console.log('other reference value: ', otherReference);
};

var someReference = 'the value';

someFunction(someReference);

// some reference sitll poinst to the old value in memory
console.log('some reference value: ', someReference);
