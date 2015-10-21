// Object.hasOwnProperty checks if the object itself has a property, as by default

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

// we have direct access to the value on the object (instance)
console.log('name:', myDuck.name);

// we also have direct access to the value set on the prototype, via the instance. The javascript interpreter first
// checks if it's available on the instance, if not, it goes down the prototype chain to try to get it.
console.log('type of animal:', myDuck.typeOfAnimal);

// logs all properties, including properties in prototype!
console.log('All properties of myDuck (including prototype):');
for (var key in myDuck) {
    console.log(' - ' + myDuck[key]);
}

// logs all properties that are directly assigned to object (so no prototype properties)
console.log('Only instance properties (own properties):');
for (var key2 in myDuck) {
    if (myDuck.hasOwnProperty(key2)) {
        console.log(' - ' + myDuck[key2]);
    }
}
