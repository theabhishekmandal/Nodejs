// the filter() elements creates an array for those elements that passes a test
var arr = ["apple", "banana", "orange", "mango", null, undefined, , , {}, 'lemon'];

// here I have applied the filter() and allowed those values to pass which are defined

// for checking for null, undefined and empty spaces use if(value)
// for checking empty objects, first convert them to String and then compare because objects cannot be compared directly
var arr1 = arr.filter(function(value, index, array){
    if(value && value.toString() != {}.toString()) return value;
});

// prints all except null, undefined , empty objects and empty elements
console.log(arr1); 