// js has a random method to find a random value

// this random method will generate value between 0 inclusive and 1 exclusive. It will be a float value
var val = Math.random();
console.log(val);

// to generate a random number in a range from 0 to given value - 1
// here we have converted it to a floor function so as to make them integers
console.log(Math.floor(Math.random() * 10));

// random integer betwen min and max - 1 range
// creating a function for generating a random values
var randomInteger = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomInteger(11, 14));