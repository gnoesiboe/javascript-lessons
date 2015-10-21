// the prototype can be used to share properties and methods between different (objects) 'instances' created with a constructor function. This means that the prototype object points to the same place in memory for all instances!
// In large applications of which loads of instances, this can be a great memory saver when you have many objects using the same functionalities!

/**
 * @param {String} name
 *
 * @constructor
 */
var Dog = function (name) {
    this.name = name;

    /**
     * This function is copied for each 'instance' (object) created by this constructor function
     *
     * @returns {String}
     */
    this.getName = function () {
        return this.name;
    };
};

// this method is put on the prototype, and therefor shared for all 'instances' (objects)
Dog.prototype.greet = function () {

    // this still points to the instance of Dog, even though the greet method is shared
    // between both intances. It's like it is used with .bind :)
    console.log('hello ' + this.name);
};

var firstDog = new Dog('Rakker'),
    secondDog = new Dog('Wodan');

console.log('instances: ', firstDog, secondDog);
console.log('exact the same method is re-used for both instances: ', firstDog.greet === secondDog.greet);
console.log('but each instance has it\'s own getName method in memory: ', firstDog.getName !== secondDog.getName);

console.log(
    'the instances shares the same prototype with the constructor function used to create them',
    firstDog.__proto__ === Dog.prototype,
    secondDog.__proto__ === Dog.prototype
);

// you should avoid direct usave of __proto__, that is why it is prefixed with __.
// @see http://webreflection.blogspot.nl/2013/03/5-reasons-you-should-avoid-proto.html for
// more information (and discussion :)
