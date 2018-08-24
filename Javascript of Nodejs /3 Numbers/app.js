var x = 1.3; // a number with a decimal
var y = 3;  // a number without decimal

// extra large numbers and extra small numbers can be written using scientific notation
var large = 123e5;
var small = 123e-5;
console.log(large + "\n" + small);

// Integer numbers are precise upto 15 decimal places
x = 999999999999999;       // x will be 999999999999999
y = 9999999999999999;      // y will be 10000000000000000 
console.log(x);
console.log(y);

// floating point precision is upto 17 digits
x = 0.2 + 0.1;
console.log(x);


/**
 *  Now js used + for both concatenation and addition
 */

 // when two numbers are added then result is a number
 console.log(12 + 13);

 // when two strings are added result is concatenation
 console.log("hello " + "world");

 // when one number and one string is added result is concatenation
 console.log(12 + "blah");
 
 // when one string and one number is added result is concatenation
 console.log("blah" + 12);

 // common mistake to expect the result to be 30
 console.log('The result is ' + 10 + 20);

 // common mistake to expect the result to be 102030:
 console.log(10 + 20 + '30');


 // Numeric strings
 // Javascript will try to convert strings to numbers in all numeric operations
 console.log('100' / '10');
 console.log('100' * '10');
 console.log('100' - '10');
 console.log('100' + '10'); // this will not add it will concatenate the string
 console.log('100'* 1 + '10' * 1); 

 // NaN - Not a number
 // It is a javascript reserved word indicating that a number is not a legal number.
 console.log(100 / 'apple');
 
 // adding a NaN to String results in concatenation
 var nan = NaN;
 var blah = "5";
console.log(blah + nan);

// Infinity - if you calculate a value outside the largest possible number
console.log(10 / 0);
