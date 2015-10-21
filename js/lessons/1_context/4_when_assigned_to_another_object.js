// when a function is pulled from it's original context and set on another object (like is the case for event listeners on DOM-objects) `this` points to the object it is assigned to.

// we have a function that tells us which context it is in
var callback = function () {
    console.log(this);
};

var eventDispatcher = {
    callback: null,

    onChange: function (callback) {
        this.callback = callback;
    },

    fireChange: function () {
        this.callback();
    }
};

// `this` within the callback points to window (or the global object)
callback();

// `this` within the callback points to the object that owns the method when it is called!
eventDispatcher.onChange(callback);
eventDispatcher.fireChange();
