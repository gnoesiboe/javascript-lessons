// self calling functions execute themselves right after they are defined.

var someVariable = (function () {
    return 'some value';
})();

console.log(someVariable);

// providing variables to self calling function
(function (somethingToSay) {
    console.log('say what?..', somethingToSay);
})(someVariable);
