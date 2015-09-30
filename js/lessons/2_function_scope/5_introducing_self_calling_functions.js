// self calling functions execute themselves right after they are defined. They do not need
// to be called manualy

var test = (function () {
    return 'test';
})();

console.log(test);

// providing variables to self calling function
(function (test) {
    console.log('say what?..', test);
})(test);
