// a Boolean() function is used to find out if an expression is true or false.
var x;
console.log(Boolean(x));  // a variable without a value is always false.

x = {};
console.log(Boolean(x)); // a variable with a value is true.

// you can also assign use this, both evaluate the same 
var one = Boolean(10 > 9);
var two = 10 > 9;
console.log(one + " " + two); 

// a Boolean value of 0(zero) is false:
x = 0;
console.log(Boolean(x)); // evaluate to false.

x = -0;
console.log(Boolean(x)); // evaluate to false.

// a Boolean value of empty string is false.
x = "";
console.log(Boolean(x)); // evaluate to false.

// a Boolean value of null is false.
x = null;
console.log(Boolean(x)); // evaluate to false.

// a Boolean value of undefined is false.
var blah;
console.log(Boolean(x)); // evaluate to false.

// a Boolean value of Nan is also false;
console.log(Boolean(10 / "")); // evaluate to true.
console.log(Boolean(10 / "b")); // evaluate to false.


// DO NOT CREATE BOOLEAN OBJECTS BECAUSE THEY MAKE COMPLICATAIONS AND THESE OBJECTS ARE NOT COMPARABLE.
one = false;
two = new Boolean(false);
console.log(one == two); // evaluate to true as they contain same values
console.log(one === two); // evaluate to false as they are not of the same type.


// two objects containing the same value will always give false as they are not comparable.
one = new Boolean(false);
two = new Boolean(false);
console.log(one == two);  // evaluate to false.
console.log(one === two); // evaluate to false.