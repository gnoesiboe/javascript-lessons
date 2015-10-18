// Javascript is always passed by value, but when a variable refers to an object (including arrays, as they are objects too), the "value" is a reference to the object.

var someTestPrimitive = 'test',
    otherTestPrimitive = someTestPrimitive;
    
someTestPrimitive = 'other test value';

console.log(otherTestPrimitive); // the other variable still contains the value 'test'

// -------------------------

var testObject = {},
  otherTestObject = testObject;

testObject.someValue = 3;

console.log(otherTestObject); // the other variable now too contains the 'water' key!
