// to prevent callback functions from taking on the owners `this` when called, we can influence the binding of the context

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
    
    // `this` in callback points to global object (or window in browser)
    console.log(this);
};
eventDispatcher.onChange(callback.bind(this)); // .bind is ES5 only! (IE9+)
eventDispatcher.fireChange();


// use jquery.bind for older support
if (typeof this.$ !== 'undefined') {
    
    // `this` in callback points to global object (or window in browser)
    eventDispatcher.onChange($.proxy(callback, this)); 
    eventDispatcher.fireChange();   
} else {
    console.log('could not execute $.proxy as jQuery is not accessible');
}


// or create your own proxy (if you have nothing else)
var self = this;
var proxy = function () {
    callback.apply(self, arguments); // points to window
};
eventDispatcher.onChange(proxy);
eventDispatcher.fireChange();