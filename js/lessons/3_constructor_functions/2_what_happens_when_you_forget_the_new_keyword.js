var SomeConstructor = function () {
    console.log(this);
};

// logs the 'window' object as this within a global function, points to the
// global object (which is 'window' in browser)
var wrongInstance = SomeConstructor();

// is undefined as nothing was constructed
console.log(wrongInstance);


// both log the created object
var goodInstance = new SomeConstructor();
console.log(goodInstance);
