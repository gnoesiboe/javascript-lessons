// when a variable is defined within a function, it is only available within that function

var someFunction = function () {
    var test = 3;

    console.log('from within the function', test);
};

someFunction();
console.log('is accessible outside the function', typeof someVariable !== 'undefined');
