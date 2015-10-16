// using self calling functions we can influence which properties/methods are publicaly accessible
// (private and public principle)

var someObject = (function () {

    /**
     * This property is only accessible within it's function scope (the
     * self calling function it is in)
     *
     * @private
     */
    var privateDoSomething = function () {
        return 'private function';
    };

    // returns the public interface that is visible to the outside world. Methods in this object
    // have access to the private properties above, as they are in the same function (function
    // scope)
    return {

        /**
         * @public
         */
        publicDoSomething: function () {
            console.log('in publicDoSomething function, using: ' + privateDoSomething());
        }
    }
})();

console.log(someObject); // logs object with just the public methods visible
console.log('has access to public method:', typeof someObject.publicDoSomething !== 'undefined');
console.log('has access to private method:', typeof someObject.privateDoSomething !== 'undefined');
