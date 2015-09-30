// when a variable is defined without the 'var' statement, it is considered global and therefor part of the global
// object. In the browser this is 'window'

var someFunction = function () {
    test = 3;

    console.log('from within the function', test);
};

someFunction();

console.log('from outside the function', test);

if (typeof window !== 'undefined') {
    console.log('from window', window.test);
}
