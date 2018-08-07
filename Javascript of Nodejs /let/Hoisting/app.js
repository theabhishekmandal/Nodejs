// Hoisting is possible only by declaring a variable using var

// Here hoisting is possible using the var keyword
x = 10;
console.log(x);
var x;

// Hoisting is not possible using the let keyword
// as it does not allow to hoist a variable at the top
y = 10;
console.log(y);
let y; 