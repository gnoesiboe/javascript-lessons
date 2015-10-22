// you can execute functions with another context than their own, using `apply` or `call`. You can use this to influence where `this` points to.

var dutchGuy = {
    introText: 'hallo'
};

var frenchGuy = {
    introText: 'salut'
};

var sayHello = function (firstName, lastName) {
    console.log(this.introText + ' ' + firstName + ' ' + lastName);
};

// introText is 'undefined' when called seperately, as 'this' points to the global object (or window in browser), and the global object has no introText property!
sayHello('pietje', 'puk');

// use apply and provide arguments as array
sayHello.apply(dutchGuy, ['pietje', 'puk']);
sayHello.apply(frenchGuy, ['pietje', 'puk']);

// or use call and provide arguments as extra arguments
sayHello.call(dutchGuy, 'pietje', 'puk');
sayHello.call(frenchGuy, 'pietje', 'puk');
