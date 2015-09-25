presentation.section('prototype');

presentation.present('an object has a prototype', function () {
    var someObject = {};

    console.log(someObject.__proto__);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('the prototype can be used to share properties and methods between instances of a constructor', function () {

    /**
     * @param {String} name
     *
     * @constructor
     */
    var Dog = function (name) {
        this.name = name;

        /**
         * @returns {String}
         */
        this.getName = function () {
            return this.name;
        }
    };

    Dog.prototype.greet = function () {

        // this still points to the instance of Dog, even though
        // the greet method is shared between both intances
        console.log('hello ' + this.name);
    };

    var firstDog = new Dog('Rakker'),
        secondDog = new Dog('Wodan');

    console.log('instances:', firstDog, secondDog);
    console.log('exact the same method is re-used for both instances:', firstDog.greet === secondDog.greet);
    console.log('each instance has it\'s own getName method in memory:', firstDog.getName !== secondDog.getName);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('now what does Object.hasOwnProperty do?', function () {

    /**
     * @param {String} name
     *
     * @constructor
     */
    var Duck = function (name) {
        this.name = name;
    };

    Duck.prototype.typeOfAnimal = 'Duck';

    var myDuck = new Duck('Klaartje');

    console.log('name:', myDuck.name);

    // we have direct access to the value set on the prototype
    console.log('type of animal:', myDuck.typeOfAnimal);

    // logs all properties, including properties in prototype
    for (var key in myDuck) {
        console.log(myDuck[key]);
    }

    // logs all properties that are directly assigned to object (so no prototype properties)
    for (var key in myDuck) {
        if (myDuck.hasOwnProperty(key)) {
            console.log(myDuck[key]);
        }
    }
});

// -------------------------------------------------------------------------------------------------------------------


presentation.present('\'Static\' methods can also be used, by applying them to the Constructor function directly', function () {

    /**
     * @param {String} name
     * @constructor
     */
    var Cat = function (name) {
        this.name = name;
        this.status = 'asleep';
    };

    Cat.prototype.wakeIt = function () {
        this.status = 'awake';
    };

    Cat.createAndAwake = function (name) {
        var out = new Cat(name);
        out.wakeIt();

        return out;
    };

    var myCat = Cat.createAndAwake('klaas');

    console.log(myCat);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('If you want to call a prototype method from the Constructor function, use apply or call', function () {

    /**
     * @param {String} name
     *
     * @constructor
     */
    var Donkey = function (name) {
        this.name = null;

        // if we don't use apply, the init method's this will
        // point to Object instead of our donkey instance
        Donkey.prototype.init.apply(this, arguments);
    };

    /**
     * @param {String} name
     */
    Donkey.prototype.init = function (name) {
        this.name = name + ' the donkey';
    };

    /**
     * @returns {string}
     */
    Donkey.prototype.getActivity = function () {
        return 'my name is: ' + this.name + ', and I am sleeping';
    };

    var myDonkey = new Donkey('Klaas');

    console.log(myDonkey);
    console.log(myDonkey.getActivity());
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('Extending prototype completely when applying inheritance', function () {

    /**
     * @param {String} name
     *
     * @constructor
     */
    var Animal = function (name) {
        this.name = name;
    };

    /**
     * @returns {String}
     */
    Animal.prototype.getName = function () {
        return this.name;
    };

    /**
     * @param {String} name
     * @param {String} type
     *
     * @constructor
     */
    var Dog = function (name, type) {
        this.type = type;

        // as we assign a new instance of Animal as prototype we
        // still need to be sure that the name variable is set on the
        // Dog instance. To do this we call the prototype with this instance
        // of Dog as  the context
        Animal.call(this, name);
    };

    // use a new instance of Animal (without parameters) as prototype
    // for all instances of Dog
    Dog.prototype = new Animal(null);

    // it is good practice to change the constructor of the prototype back to the main Constructor
    // as it changes when you assign a whole new prototype
    Dog.prototype.constructor = Dog;

    /**
     * @returns {string}
     */
    Dog.prototype.getDescription = function () {
        return this.getName() + ', ' + this.type;
    };

    var myDog = new Dog('Wiebe', 'Dalmatier');

    console.log(myDog);
    console.log(myDog.getDescription());

    console.log('is instance of Dog:', myDog instanceof Dog);
    console.log('is instance of Animal:', myDog instanceof Animal);
});


// -------------------------------------------------------------------------------------------------------------------


presentation.present('build in objects have Object as prototype', function () {

    console.log([].__proto__ instanceof Object);
    console.log((new Array()).__proto__ instanceof Object);

    console.log(''.__proto__ instanceof Object);
    console.log((new String()).__proto__ instanceof Object);

    console.log((1).__proto__ instanceof Object);
    console.log((new Number()).__proto__ instanceof Object);
});
