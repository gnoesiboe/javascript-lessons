// when a function is set on another object (like is the case for event listeners on DOM-objects) `this` points to the object it is assigned to. 

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
    console.log(this === eventDispatcher);  
};

// `this` within the callback points to window (or the global object)
callback();

// this within the callback points to the object that owns the method
// when it is called
eventDispatcher.onChange(callback);
eventDispatcher.fireChange();