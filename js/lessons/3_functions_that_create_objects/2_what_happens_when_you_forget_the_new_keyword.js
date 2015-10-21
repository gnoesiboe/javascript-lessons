/**
 * @constructor
 */
var SomeConstructor = function () {
    console.log(this);
};

// logs the global (or window) object as 'this' within a global function, points to the global object
var notAnInstance = SomeConstructor();

// is undefined as nothing was constructed, as the 'new' keyword was not used
console.log(notAnInstance);


// both log the created object
var anInstance = new SomeConstructor();
console.log(anInstance);
