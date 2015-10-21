// now what happens when variables are pointing to properties of objects, and not to the entire object?

var someObject = {
    value: 'old value'  
};

// now we create a new variable and point it to a property of the object's value
var someValue = someObject.value;
    
// but when we change the original object's value..
someObject.value = 'new value';

// the someValue variable still points to the old value!
console.log(someValue);

// but someObject is changed!
console.log(someObject);