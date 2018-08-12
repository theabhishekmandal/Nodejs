// forEach() method calls a function once for each array element
var arr = ["apple", "banana", "mango", "orange", "lemon"];

// here the order of value, index and arr should remain the same
// value defines the value of the array at the current position
// index is the current position of the array
// arr is the actual array which is passed in this case it is arr
arr.forEach(function(value, index, arr){
    console.log(arr[index]);
    console.log(value);
});