/**
 * @param {Number} a
 * @param {Object} b
 * @param {Object} c
 */
var changeStuff = function (a, b, c) {
  a = a * 10;
  b.value = "changed";
  c = { value: "changed"};
};

var somePrimitive = 10,
    someObject = { 
        value: 'unchanged'
    },
    someOtherObject = { 
        value: 'unchanged'
    };

changeStuff(somePrimitive, someObject, someOtherObject);

// console.log(somePrimitive);
// console.log(someObject.value);
// console.log(someOtherObject.value);

// remember that arrays are also objects!!
