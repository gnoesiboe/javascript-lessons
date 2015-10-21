// functions have access to variables defined in arching functions

var someFunction = function () {

    // this variable can be accessed from within this function and child functions
    var test = 'in parent function';

    var someOtherFunction = function () {
        console.log(test);
    };

    someOtherFunction();
};

someFunction();
