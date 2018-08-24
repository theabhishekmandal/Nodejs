// number is declared as objects
// Do not create Number objects. It slows down execution speed

var x = 500;
var y = new Number(500);
console.log(x == y);    // it will evaluate to true as both the values are same
console.log(x === y);   // it will evaluate to false as the type is not same 

x = new Number(500);
// both are false as objects cannot be compared
console.log(x == y);
console.log(x === y);