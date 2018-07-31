// findIndex() method returns the index of the first array element that passes a test case

var arr = ["apple", "banana", "mango", "lemon"];
var index = arr.findIndex(function(value, index, array){
    return value.length == 6;
});

// banana is the first array element which has length equal to 6.
console.log(arr[index]);