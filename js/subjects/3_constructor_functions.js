presentation.section('constructor functions');

presentation.present('the new keywords builds objects out of functions', function () {

    // a function that can be used to construct an object using the `new` keyword, is called
    // a Constructor Function. To communicate that it is, it's first letter is always a capital

    /**
     * @param {String} a
     *
     * @constructor
     */
    var SomeClass = function (a) {
        this.a = a;
    };

    var myClass = new SomeClass('Some value'); // results in an object with an 'a' property

    // the created object still has a reference to the constructor function it was created with
    console.log(myClass.constructor === SomeClass);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('what happens when you forget \'new\'?', function () {

    var SomeClass = function () {
        console.log(this);
    };

    var wrongInstance = SomeClass(); // logs the window object as nothing is constructed
    console.log(wrongInstance); // is undefined as nothing is constructed

    var goodInstance = new SomeClass(); // logs the created object
    console.log(goodInstance); // also logs the created object
});
