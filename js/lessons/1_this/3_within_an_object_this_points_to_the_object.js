// within an object, this points to the object itself

var someObject = {
    someFunction: function () {
        console.log(this);
    }
};

someObject.someFunction();