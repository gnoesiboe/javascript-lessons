// when a variable is defined globally, it becomes a property of the global object.
// In the browser this is the 'window' object. This example does not work in presentation
// tool, as it is executed within a function. Display in console!

var globalProperty = 3;
console.log(window.globalProperty === globalProperty);
