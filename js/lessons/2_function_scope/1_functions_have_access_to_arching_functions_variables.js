// functions have access to variables defined in arching functions

var someFunction = function () {
    var test = 'in parent function';

    var someOtherFunction = function () {
        console.log(test);
    };

    someOtherFunction();
};

someFunction();
