// here we declare number as an object and as a integer
// various problems may arise if number is defined using the first way
var one = new Number(4);
var two = 4;

console.log(one == two);            // is true because they contain the same values
console.log(one === two);           // is false because their type is not same


var string = "hello";
var string1 = new String("hello");

console.log(string == string1);     // is true because they contain the same values
console.log(string === string1);    // is false because their type is not same

// If a number is declared as object then they cannot be compared
one = new Number(4);
two = new Number(4);
// both values will result to false as number objects cannot be compared
console.log(one == two);
console.log(one === two);