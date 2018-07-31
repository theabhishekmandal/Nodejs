var arr = ["apple", "banana", "mango","orange", "lemon"];

// the map() method creates a new array for each element
// The map() method calls the provided function once for each element in an array.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
console.log(arr.toString());
var arr1 = arr.map(function(value, index, array){
    return value;
});

console.log(arr1); // array is being returned to this one
