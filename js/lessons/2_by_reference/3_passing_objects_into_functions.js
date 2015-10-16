// when you pass objects into functions, the are passed by reference. Meaning that the function arguments points to the same object as the original variable you defined.

var someObject = {
    property: 'test'
};

console.log('object before passing into function: ', someObject);

function doChangeObject(objectByReference) {
    objectByReference.property = 'anders';
}

doChangeObject(someObject);

console.log('new object value after calling function: ', someObject);


// -------------------------

// arrays are also objects, so they work the same way. They are passed in by reference

var someArray = ['eerste', 'tweede', 'derde'];

console.log('array before passing into function: ', someArray);

function doChangeArray(arrayByReference) {
    someArray.push('vierde');
}

doChangeArray(someArray);

console.log('new array value after calling function: ', someArray);