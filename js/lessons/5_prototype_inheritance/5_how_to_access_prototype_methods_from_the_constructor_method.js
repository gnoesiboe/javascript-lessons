// If you want to call a prototype method from the Constructor function, use apply or call. This
// pattern is mostly used to initiate the object further, but not from within the constructur function
// itself. ie:

/**
 * @param {String} name
 *
 * @constructor
 */
var Donkey = function (name) {

    /**
     * @type {String}
     */
    this.name = null;

    // if we don't use apply, the init method's 'this' will point to Object() instead of our donkey instance, as we are
    // still in de process of creating this object.
    Donkey.prototype.init.apply(this, arguments);
};

/**
 * @param {String} name
 */
Donkey.prototype.init = function (name) {

    // when correctly called, 'this' points to the instance created with the constructor method
    this.name = name + ' the donkey';
};

/**
 * @returns {string}
 */
Donkey.prototype.getActivity = function () {
    return 'as I am ' + this.name + ', I am sleeping';
};

var myDonkey = new Donkey('Klaas');

console.log('Me are:', myDonkey);
console.log(myDonkey.getActivity());
