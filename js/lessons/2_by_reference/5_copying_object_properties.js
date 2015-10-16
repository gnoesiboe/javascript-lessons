// when dealing with an object (arrays are also objects), things get a little more difficult. 

var first = {
    a: 1,
    b: 'twee',
    c: {
        test: 'anders'
    },
    d: ['eerste', 'tweede']
};

var referenceToA = first.a,
    referenceToB = first.b,
    referenceToC = first.c,
    referenceToD = first.d;
    
// for primitives, not by reference
first.a = 2;
console.log('referenceToA value: ', referenceToA, 'which is not: ', first.a);

first.b = 'drie';
console.log('referenceToB value: ', referenceToB, 'which is not: ', first.b);

// BUT! Objects are copied by reference!
referenceToC.someMore = 'blaat';
console.log('referenceToC value: ', referenceToC, 'which equals!! ', first.c);

// Arrays are also copied by reference!
referenceToD.push('derde');
console.log('referenceToD value: ', referenceToD, 'which equals!!', first.d);