presentation.section('This');

presentation.present('this always points to an object, by default the \'window\' object', function () {
    console.log(this);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('within a function in global scope, this points to window', function () {
    var someFunction = function () {
        console.log(this);
    };

    someFunction();
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('within an object, this points to the object', function () {
    var someObject = {
        someFunction: function () {
            console.log(this);
        }
    };

    someObject.someFunction();
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('when a function (ie. a callback) is saved and called from another object, this points to that object', function () {
    // remember functions are variables and can be passed along

    var eventDispatcher = {
        callback: null,

        onChange: function (callback) {
            this.callback = callback;
        },

        fireChange: function () {
            this.callback();
        }
    };

    eventDispatcher.onChange(function () {
        console.log(this); // this does not point to window, but to the object that OWNS the method
    });

    eventDispatcher.fireChange();
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('binding execution of functions to objects', function () {
    var dutchGuy = {
        introText: 'hallo'
    };

    var frenchGuy = {
        introText: 'salut'
    };

    var sayHello = function (firstName, lastName) {
        console.log(this.introText + ' ' + firstName + ' ' + lastName);
    };

    sayHello('pietje', 'puk'); // introText is undefined

    // use apply and provide arguments as array
    sayHello.apply(dutchGuy, ['pietje', 'puk']);
    sayHello.apply(frenchGuy, ['pietje', 'puk']);

    // or use call and provide arguments as extra arguments
    sayHello.call(dutchGuy, 'pietje', 'puk');
    sayHello.call(frenchGuy, 'pietje', 'puk');
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('bind context to callback functions', function () {
    var eventDispatcher = {
        callback: null,

        onChange: function (callback) {
            this.callback = callback;
        },

        fireChange: function () {
            this.callback();
        }
    };

    // .bind is ES5 only
    var callback = function () {
        console.log(this); // points to window
    };
    eventDispatcher.onChange(callback.bind(this));
    eventDispatcher.fireChange();


    // use jquery.bind for older support
    eventDispatcher.onChange($.proxy(callback, this)); // points to window
    eventDispatcher.fireChange();


    // or create your own proxy (if you have nothing else)
    var self = this;
    var proxy = function () {
        callback.apply(self, arguments); // points to window
    };
    eventDispatcher.onChange(proxy);
    eventDispatcher.fireChange();
});
