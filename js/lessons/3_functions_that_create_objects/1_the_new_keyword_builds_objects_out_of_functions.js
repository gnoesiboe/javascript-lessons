// a function that can be used to construct an object using the `new` keyword, is called a Constructor Function. To communicate that it is, it's first letter is always a capital.
// Within the constructor function, this points to the object that is to be created with it.

/**
 * @param {String} a
 *
 * @constructor
 */
var SomeConstructor= function (a) {

    // the created object has an 'a' property with the the supplied value
    this.a = a;
};

var myObject = new SomeConstructor('Some value'); // results in an object with an 'a' property

console.log('created object:', myObject);

// the created object still has a reference to the constructor function it was created with
// in the constructor property
console.log(myObject.constructor === SomeConstructor);
