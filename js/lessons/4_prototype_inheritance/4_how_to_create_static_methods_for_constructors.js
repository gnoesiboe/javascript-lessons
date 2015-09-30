// 'Static' methods (methods that do not apply to an instance) can also be used, by applying
// them to the Constructor function directly

/**
 * @param {String} name
 *
 * @constructor
 */
var Cat = function (name) {
    this.name = name;
    this.status = 'asleep';
};

/**
 * Propotype function
 */
Cat.prototype.wakeIt = function () {
    this.status = 'awake';
};

/**
 * Static function
 *
 * @param {String} name
 *
 * @returns {Cat}
 */
Cat.createAndAwake = function (name) {
    var out = new Cat(name);
    out.wakeIt();

    return out;
};

// the cat constructor is now made available for it's own instantiation
// and in the meanwhile wakes itself :)
var myCat = Cat.createAndAwake('klaas');

console.log('awoken cat:', myCat);
