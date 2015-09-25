presentation.section('Function scope');

presentation.present('functions defined in other functions have access to parent function', function () {
    var someFunction = function () {
        var test = 'in parent function';

        var someOtherFunction = function () {
            console.log(test);
        };

        someOtherFunction();
    };

    someFunction();
});


// -------------------------------------------------------------------------------------------------------------------


presentation.introduce('when a variable is defined with \'var\' globally, it becomes a property of window');

var globalProperty = 3;
console.log(window.globalProperty === globalProperty);


// -------------------------------------------------------------------------------------------------------------------


presentation.present('when a variable is defined within a function, it\'s scope is bound to the function', function () {
    var someFunction = function () {
        var test = 3;

        console.log('from within the function', test);
    };

    someFunction();
    console.log('is accessible outside the function', typeof test !== 'undefined');
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('when a variable is defined withing \'var\' it is considered defined in global (window) scope', function () {
    var someFunction = function () {
        test = 3;

        console.log('from within the function', test);
    };

    someFunction();
    console.log('from outside the function', test);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('introducing self calling functions', function () {
    // the function executes itself and does not need to be called first


    // simple
    var test = (function () {
        return 'test';
    })();

    console.log(test);


    // providing variables to self calling function
    (function (test) {
        console.log('say what?..', test);
    })(test);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('using self calling functions to influence which methods are publically accessible (private/public)', function () {

    var someObject = (function () {

        /**
         * @private
         */
        var privateDoSomething = function () {
            console.log('in privateDoSomething function');
        };

        // returning the private interface
        return {

            /**
             * @public
             */
            publicDoSomething: function () {
                console.log('in publicDoSomething function');
            },

            /**
             * @public
             */
            callPrivateDoSomething: function () {
                privateDoSomething();
            }
        }
    })();

    console.log(someObject); // logs object with just the public methods visible
    console.log(someObject.publicDoSomething());
    console.log(someObject.callPrivateDoSomething());
    console.log(typeof someObject.privateDoSomething); // undefined
});
