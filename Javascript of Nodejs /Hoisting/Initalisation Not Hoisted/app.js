// Javascript initialisations are not hoisted
// Only Javascript's declarations are hoisted to the top

// First example
var x = 1;
var y = 2;
console.log(x + y);

// Second Example
/*
    In this only the declration of var two is hoisted to the top and not the initialisation
    so the answer it generates is NaN

    The given example is equal to the writing
    var one = 2;
    var two;
    console.log(one + two);
    two = 3;
*/
var one = 2;
// it generates a NaN
console.log(one + two); 
var two = 3;

