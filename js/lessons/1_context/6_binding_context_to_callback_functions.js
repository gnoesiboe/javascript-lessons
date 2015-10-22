// to prevent callback functions from taking on the owner's context when called, we can bind another context to it. We cannot use `apply` or `call` for this, as we don't control the execution of the function.

var eventDispatcher = {
    callback: null,

    onChange: function (callback) {
        this.callback = callback;
    },

    fireChange: function () {
        this.callback();
    }
};


var callback = function () {

    // `this` in callback points to global object (or window in browser) with no override
    console.log(this);
};

// Using .bind in ES5+ (IE9+) to permanently bind a context to a function
eventDispatcher.onChange(callback.bind(this)); //
eventDispatcher.fireChange();


// use jquery.proxy for older support
if (typeof this.$ !== 'undefined') {

    // `this` in callback points to global object (or window in browser)
    eventDispatcher.onChange($.proxy(callback, this));
    eventDispatcher.fireChange();
} else {
    console.log('could not execute $.proxy as jQuery is not accessible');
}


// or create your own proxy
var self = this;
var proxy = function () {
    callback.apply(self, arguments); // points to window
};
eventDispatcher.onChange(proxy);
eventDispatcher.fireChange();
