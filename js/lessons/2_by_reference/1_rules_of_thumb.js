// 1. Javascript is always passed by value, but when a variable refers to an object (including arrays, as they are objects too), the "value" is a reference to the object.

(function () {
    var test = {},
        other = test;
        
    test.water = 3;
    
    console.log(other); // the 'other' variable now too contains the 'water' key
})();


// 2. Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.

(function () {
    var test = {};
    var anders = test;
    
    anders = 3;
    
    console.log(anders); // the variable 'anders' now contains the value '3'
    console.log(test); // but test still contains the object
})();


// 3. However, changing a property of an object referenced by a variable does change the underlying object.

(function () {
    var test = {
        eerste: 'water'
    };
    
    var anders = test.eerste;
    
    test.eerste = 'anders';
    
    console.log(test.eerste, anders);
})();