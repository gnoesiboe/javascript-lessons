console.log([].__proto__ instanceof Object);
console.log((new Array()).__proto__ instanceof Object);

console.log(''.__proto__ instanceof Object);
console.log((new String()).__proto__ instanceof Object);

console.log((1).__proto__ instanceof Object);
console.log((new Number()).__proto__ instanceof Object);
