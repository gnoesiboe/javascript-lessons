// the prototype can be used to share properties and methods between different (objects) 'instances'
// created with a constructor function. In large applications of which loads of instances, this can
// be a great memory saver!

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
    };
};

Dog.prototype.greet = function () {

    // this still points to the instance of Dog, even though the greet method is shared
    // between both intances. It's like it is used with .bind :)
    console.log('hello ' + this.name);
};

var firstDog = new Dog('Rakker'),
    secondDog = new Dog('Wodan');

console.log('instances:', firstDog, secondDog);
console.log('exact the same method is re-used for both instances:', firstDog.greet === secondDog.greet);
console.log('but each instance has it\'s own getName method in memory:', firstDog.getName !== secondDog.getName);

// you should avoid direct usave of __proto__, that is why they are prefixed with __.
// @see http://webreflection.blogspot.nl/2013/03/5-reasons-you-should-avoid-proto.html for
// more information (and discussion :)
console.log(
    'the instances shares the same prototype with the constructor function used to create them',
    firstDog.__proto__ === Dog.prototype,
    secondDog.__proto__ === Dog.prototype
);
