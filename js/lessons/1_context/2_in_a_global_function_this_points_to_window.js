// within a function that is defined in global scope, this points to window in the browser, or in node to a global object

var someFunction = function () {
    console.log(this);
};

someFunction();
