// all objects have a prototype property, that is accessible through the __proto__ property.

var SomeConstructor = function () {};
var myObject = new SomeConstructor();

console.log(myObject.__proto__);

// a standard Object, constructor with new Object or {}, has a prototype, but
// the prototype does not have it's own prototype :)

var mySecondObject = {};
console.log(mySecondObject.__proto__);
console.log(mySecondObject.__proto__.__proto__);
