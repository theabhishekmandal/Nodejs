// some() method returns a single boolean value and checks if some values pass the test
var arr = ["apple", "banana", "mango", "lemon"];

var boolean = arr.some(function(value, index, array){
    return value.length == 6;
});

// answer is true because banana is a single value which has length 6
console.log(boolean);
