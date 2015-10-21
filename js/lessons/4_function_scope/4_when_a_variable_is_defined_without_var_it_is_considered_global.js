// when a variable is defined without the 'var' statement, it is considered global and therefor part of the global scope. It is important to use the var keyword to prevent hard to spot errors. In strict mode global variable generation causes warnings.

var someFunction = function () {
    someVariable = 3;

    console.log('from within the function', someVariable);
};

someFunction();

console.log('from outside the function', someVariable);

if (typeof window !== 'undefined') {
    console.log('from window', window.someVariable);
}
