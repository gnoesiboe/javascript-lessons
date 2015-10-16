/**
 * Our base constructor
 *
 * @param {String} name
 *
 * @constructor
 */
var Animal = function (name) {

    /**
     * @type {String}
     */
    this.name = name;
};

/**
 * @returns {String}
 */
Animal.prototype.getName = function () {
    return this.name;
};

/**
 * Our child constructor
 *
 * @param {String} name
 * @param {String} type
 *
 * @constructor
 */
var Dog = function (name, type) {

    /**
     * @type {String}
     */
    this.type = type;

    // as we assign a new instance of Animal as prototype (see below) we
    // still need to be sure that the name variable is set on the
    // Dog instance. To do this we call the prototype as a regular function
    // with this instance of Dog as  the context
    Animal.call(this, name);
};

// use a new instance of Animal (without parameters) as prototype
// for all instances of Dog
Dog.prototype = new Animal(null);

// as we totaly replaced the prototype, we also changed the prototype's constructor. It
// is good practice to change the constructor of the prototype back to the main constructor, as
// leaving it might result in unexpected behavior
Dog.prototype.constructor = Dog;

/**
 * @returns {string}
 */
Dog.prototype.getDescription = function () {
    return this.getName() + ', ' + this.type;
};

var myDog = new Dog('Wiebe', 'Dalmatier');

console.log('myDog', myDog);
console.log(myDog.getDescription());

console.log('is instance of Dog:', myDog instanceof Dog);
console.log('is instance of Animal:', myDog instanceof Animal);
