/**
 * @constructor
 */
var SomeConstructor = function () {
    console.log(this);
};

// logs the global (or window) object as 'this' within a global function, points to the global object
var notAnInstance = SomeConstructor();

// is undefined as the function has no return value and nothing was constructed, as the 'new' keyword was not used
console.log(notAnInstance);

var anInstance = new SomeConstructor();
console.log(anInstance); // logs the created object
